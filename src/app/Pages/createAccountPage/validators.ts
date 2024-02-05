import * as Yup from "yup";
import { errorValues } from "./constants";

export const signupSchema = Yup.object({
  email: Yup.string()
    .email(errorValues.email.invalid)
    .required(errorValues.email.required),
  password: Yup.string()
    .min(8, errorValues.password.min)
    .max(30, errorValues.password.max)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/,
      errorValues.password.combination
    )
    .required(errorValues.password.required),
  rememberMe: Yup.bool(),
});
