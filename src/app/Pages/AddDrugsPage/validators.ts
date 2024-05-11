import * as Yup from "yup";
import { errorValues } from "./constants";

export const addDrugValidationSchema = Yup.object({
  drug: Yup.string().required(errorValues.drug.required),
  batchNumber: Yup.string().required(errorValues.batchNumber.required),
  cost: Yup.number()
    .required("Cost is required")
    .typeError("Cost must be a number")
    .positive(errorValues.quantity.invalid),
  price: Yup.number()
    .required("Price is required")
    .typeError("Price must be a number")
    .positive(errorValues.quantity.invalid),
  recievedFrom: Yup.string().required("Drug Provider Name is required"),
  expiredDate: Yup.date()
    .min(new Date(), errorValues.expirationDate.pastDate)
    .required(errorValues.expirationDate.required),
  quantity: Yup.number()
    .typeError("Quantity must be a number")
    .required(errorValues.quantity.required)
    .positive(errorValues.quantity.invalid)
    .moreThan(1),
});
