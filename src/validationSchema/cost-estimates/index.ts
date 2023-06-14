import * as yup from 'yup';

export const costEstimateValidationSchema = yup.object().shape({
  description: yup.string().required(),
  amount: yup.number().integer().required(),
  project_id: yup.string().nullable().required(),
});
