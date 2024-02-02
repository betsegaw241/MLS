import * as Yup from 'yup';
import { errorValues } from './constants';
export const loginInSchema = Yup.object({
  email: Yup.string()
    .email(errorValues.email.invalid)
    .required(errorValues.email.required),
  password: Yup.string()
    .min(3, errorValues.password.min)
    .max(30, errorValues.password.max)
    .required(errorValues.password.required),
    rememberMe: Yup.bool(),
});
