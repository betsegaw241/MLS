import * as Yup from "yup";
import { errorValues } from "./constants";

export const addDrugValidationSchema = Yup.object({
  drug: Yup.string()
    .required(errorValues.drug.required)
    .matches(/^[a-zA-Z0-9\s]+$/, errorValues.drug.invalid),
  batch: Yup.number()
    .typeError("Batch Number must be a number")
    .required(errorValues.batch.required)
    .positive(errorValues.batch.invalid),
  expirationDate: Yup.date()
    .min(new Date(), errorValues.expirationDate.pastDate)
    .required(errorValues.expirationDate.required),
  quantity: Yup.number()
    .typeError("Quantity must be a number")
    .required(errorValues.quantity.required)
    .positive(errorValues.quantity.invalid),
});