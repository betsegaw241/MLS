import * as Yup from "yup";
import { errorValues } from "./constants";

export const EditSchema = Yup.object({
  name: Yup.string().required(errorValues.name.required),
  email: Yup.string()
    .email(errorValues.email.invalid)
    .required(errorValues.email.required),
  phone: Yup.string()
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})/,
      errorValues.phone.invalid
    )
    .max(10, errorValues.phone.max)
    .required(errorValues.phone.required)

    .min(1, errorValues.phone.min),
});
