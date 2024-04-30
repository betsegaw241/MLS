import * as Yup from "yup";
import { errorValues } from "./constants";

export const AssignPharmaciesValidationSchema = Yup.object({
  admin: Yup.string().required(errorValues.admin.required),
  quantity: Yup.number()
    .typeError("Quantity must be a number")
    .required(errorValues.quantity.required)
    .positive(errorValues.quantity.invalid),
});
