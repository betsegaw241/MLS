import * as Yup from "yup";
import { errorValues } from "./constants";

export const addDrugValidationSchema = Yup.object({
  drug: Yup.string().required(errorValues.drug.required),
  batchNumber: Yup.string().required(errorValues.batchNumber.required),
  cost: Yup.string().required("Cost is required"),
  price: Yup.string().required("Price is required"),
  recievedFrom: Yup.string().required("Drug Provider Name is required"),
  expiredDate: Yup.date()
    .min(new Date(), errorValues.expirationDate.pastDate)
    .required(errorValues.expirationDate.required),
  quantity: Yup.number()
    .typeError("Quantity must be a number")
    .required(errorValues.quantity.required)
    .positive(errorValues.quantity.invalid),
});
// drug: string;
// batchNumber: string;
// expiredDate: string;
// quantity: number;
// recievedFrom: string;
// cost: string;
// price: string;
