import * as Yup from "yup";
import { errorValues } from "./constants";

export const EditSchema = Yup.object({
  name: Yup.string()
    .required(errorValues.name.required),
  email: Yup.string()
    .email(errorValues.email.invalid)
    .required(errorValues.email.required),
  phone: Yup.string()
    .min(10, errorValues.phone.min)
    .max(14, errorValues.phone.max)
    .required(errorValues.phone.required),
});
