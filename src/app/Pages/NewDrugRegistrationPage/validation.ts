import * as Yup from "yup";
import { Drug } from "./types";
export const initialValues: Drug = {
  name: "",
  usage: "",
  dosage: "",
  unitOfIssue: "",
  sideEffects: "",
  unitPrice: "",
  drugPhoto: "",
  ingredients: "",
  instruction: "",
  strength: "",
  minStockLevel: "",
  needPrescription: false,
};

export const errorValues = {
  name: {
    invalid: "Invalid drug name",
    required: "Drug Name is required",
  },
  sideEffect: {
    required: "Side effects are required",
  },
  usage: {
    required: "Usage instruction is required",
  },
  unitOfIssue: {
    required: "Usage instruction is required",
  },
};

export const addDrugValidationSchema = Yup.object({
  drug: Yup.string()
    .required(errorValues.name.required)
    .matches(/^[a-zA-Z0-9\s]+$/, errorValues.name.invalid),
  usage: Yup.string().required(errorValues.usage.required),
  sideEffect: Yup.string().required(errorValues.sideEffect.required),
  unitOfIssue: Yup.string().required(errorValues.unitOfIssue.required),
});
