import { IDrugStock } from "./types";

export const IntialValues: IDrugStock = {
  drug: "",
  batchNumber: "",
  quantity: null,
  cost: null,
  price: null,
  expiredDate: undefined,
  recievedFrom: ""
};
export const errorValues = {
  drug: {
    invalid: "Invalid drug name",
    required: "Drug Name is required",
  },
  batchNumber: {
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
