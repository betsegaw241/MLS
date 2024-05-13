import * as Yup from "yup";
import { changePassworderrorValues, errorValues } from "./constants";

export const loginInSchema = Yup.object({
  email: Yup.string()
    .email(errorValues.email.invalid)
    .required(errorValues.email.required),
  password: Yup.string()
    .min(8, errorValues.password.min)
    .max(30, errorValues.password.max)
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/,
    //   errorValues.password.combination
    // )
    .required(errorValues.password.required),
  rememberMe: Yup.bool(),
});
export const forgetPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .email(errorValues.email.invalid)
    .required(errorValues.email.required),
});

export const newPasswordValidationSchema = Yup.object({
  password: Yup.string()
    .min(8, changePassworderrorValues .password.min)
    .max(255, changePassworderrorValues .password.max)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      changePassworderrorValues .password.combination
    )
    .required(changePassworderrorValues .password.required),
  confirmPassword: Yup.string()
    .min(8, changePassworderrorValues .password.min)
    .max(255, changePassworderrorValues .password.max)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      changePassworderrorValues .password.combination
    )
    .oneOf(
      [Yup.ref("password")],
      changePassworderrorValues .confirmPassword.match
    )
    .required("Confirm Password is required"),
});
