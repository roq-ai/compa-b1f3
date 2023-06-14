import * as yup from 'yup';
import { projectValidationSchema } from 'validationSchema/projects';

export const organizationValidationSchema = yup.object().shape({
  description: yup.string(),
  image: yup.string(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  project: yup.array().of(projectValidationSchema),
});
