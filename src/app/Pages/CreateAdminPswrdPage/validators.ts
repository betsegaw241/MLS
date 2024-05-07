import * as Yup from "yup";
import { errorValues } from "./constants";

export const createAdminPasswordValidationSchema = Yup.object({
  password: Yup.string()
    .required(errorValues.password.required)
    .min(8, "Your password must be at least 8 characters long"),
    confirmPassword: Yup.string()
    .required(errorValues.confirmPassword.required)
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .min(8, "Your password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Your password must contain at least one letter, one number, and one special character"
    ),
});
