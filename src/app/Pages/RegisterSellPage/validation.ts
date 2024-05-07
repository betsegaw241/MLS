import * as Yup from "yup";
// import { errorValues } from "./constants";

export const registerSellValidationSchema = Yup.object({
  drug: Yup.string().required("select drug"),
  batchNumber: Yup.string().required("Batch number is required"),

  quantity: Yup.number()
    .typeError("Quantity must be a number")
    .required("Quantity required")
    .positive("Quantity must be posetive"),
});
