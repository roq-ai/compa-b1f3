import * as yup from 'yup';

export const clientValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  project_id: yup.string().nullable().required(),
});
