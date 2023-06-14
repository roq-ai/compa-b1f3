import * as yup from 'yup';
import { clientValidationSchema } from 'validationSchema/clients';
import { costEstimateValidationSchema } from 'validationSchema/cost-estimates';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  project_manager_id: yup.string().nullable().required(),
  client: yup.array().of(clientValidationSchema),
  cost_estimate: yup.array().of(costEstimateValidationSchema),
});
