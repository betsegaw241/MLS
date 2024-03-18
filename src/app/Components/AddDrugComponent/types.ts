export const initialValues: FormValues = {
  drug: "",
  batch: "",
  expirationDate: "",
  quantity: "",
};
export interface FormValues {
  drug: string;
  batch: string;
  expirationDate: string;
  quantity: string;
}

import * as Yup from "yup";

export const errorValues = {
  drug: {
    invalid: "Invalid drug name",
    required: "Drug Name is required",
  },
  batch: {
    invalid: "Invalid batch Number",
    required: "Batch is required",
  },
  expirationDate: {
    invalid: "Invalid expiration date",
    required: "Expiration date is required",
    pastDate: "Expiration date must be in the future",
  },
  quantity: {
    invalid: "Invalid Quantity",
    required: "Quantity is required",
  },
};

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
