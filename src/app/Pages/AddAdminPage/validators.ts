import * as Yup from "yup";
import { errorValues } from "./constants";

export const addAdminValidationSchema = Yup.object({
  firstName: Yup.string().trim().required(errorValues.firstName.required) .matches(/^[^\d]+$/, errorValues.firstName.invalid),
  lastName: Yup.string().trim().required(errorValues.lastName.required) .matches(/^[^\d]+$/, errorValues.firstName.invalid),
  adminEmailAddress: Yup.string()
    .email(errorValues.email.invalid)
    .required(errorValues.email.required),

  adminPhoneNumber: Yup.string()
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/,
      errorValues.adminPhoneNumber.invalid
    )
    .max(10, errorValues.adminPhoneNumber.max)
    .required(errorValues.adminPhoneNumber.required)

    .min(1, errorValues.adminPhoneNumber.min),
});

