import * as Yup from "yup";
import { errorValues } from "./constants";

export const addAdminValidationSchema = Yup.object({
  adminName: Yup.string().trim().required(errorValues.adminName.required),
  adminEmailAddress: Yup.string()
    .email(errorValues.email.invalid)
    .required(errorValues.email.required),

 adminPassword: Yup.string()
  .min(8, errorValues.adminPassword.min)
  .max(20, errorValues.adminPassword.max)
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    errorValues.adminPassword.combination
  )
  .required(errorValues.adminPassword.required),

  adminPhoneNumber: Yup.string()
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/,
      errorValues.adminPhoneNumber.invalid
    )
    .max(10, errorValues.adminPhoneNumber.max)
    .required(errorValues.adminPhoneNumber.required)

    .min(1, errorValues.adminPhoneNumber.min),
});

