import * as Yup from "yup";
import { errorValues } from "./constants";

export const EditSchema = Yup.object({
  phone: Yup.string()
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/,
      errorValues.phone.invalid
    )
    .max(10, errorValues.phone.max)
    .required(errorValues.phone.required)

    .min(1, errorValues.phone.min),
});

export const changePasswordValidationSchema = Yup.object({
  newPassword: Yup.string()
    .required(errorValues.newPassword.required)
    .min(6, errorValues.newPassword.min),
  currentPassword: Yup.string()
    .required(errorValues.currentPassword.required)
    .min(6, errorValues.currentPassword.min),
  confirmPassword: Yup.string()
    .required(errorValues.confirmPassword.required)
    .min(6, errorValues.confirmPassword.min),
});
