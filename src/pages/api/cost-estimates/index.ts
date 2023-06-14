import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { costEstimateValidationSchema } from 'validationSchema/cost-estimates';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getCostEstimates();
    case 'POST':
      return createCostEstimate();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCostEstimates() {
    const data = await prisma.cost_estimate
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'cost_estimate'));
    return res.status(200).json(data);
  }

  async function createCostEstimate() {
    await costEstimateValidationSchema.validate(req.body);
    const body = { ...req.body };

    const data = await prisma.cost_estimate.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
