import * as Yup from "yup";
import { FormValues } from "./types";
export const initialValues: FormValues = {
  email: "",
  password: "",
};

export const errorValues = {
  email: {
    invalid: "Invalid email address",
    required: "Email is required",
  },
  password: {
    min: "Password must be grater than 8",
    max: "Password is too long",
    required: "Password is required",
    combination:
      "password must contain at least one lowercase, uppercase, digit & special character",
  },
};

export const loginInSchema = Yup.object({
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
