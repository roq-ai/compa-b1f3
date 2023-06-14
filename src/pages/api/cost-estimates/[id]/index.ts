import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { costEstimateValidationSchema } from 'validationSchema/cost-estimates';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.cost_estimate
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getCostEstimateById();
    case 'PUT':
      return updateCostEstimateById();
    case 'DELETE':
      return deleteCostEstimateById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCostEstimateById() {
    const data = await prisma.cost_estimate.findFirst(convertQueryToPrismaUtil(req.query, 'cost_estimate'));
    return res.status(200).json(data);
  }

  async function updateCostEstimateById() {
    await costEstimateValidationSchema.validate(req.body);
    const data = await prisma.cost_estimate.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteCostEstimateById() {
    const data = await prisma.cost_estimate.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
