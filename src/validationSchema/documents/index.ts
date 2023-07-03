import * as yup from 'yup';

export const documentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  content: yup.string().required(),
  is_audited: yup.boolean(),
  organization_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
