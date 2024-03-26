import * as Yup from "yup";
import { Drug } from "./types";
export const initialValues: Drug = {
  name: "",
  dosage: "",
  sideEffects: "",
  instruction: "",
  strength: "",
  minStockLevel: "",
  needPrescription: true,
  drugPhoto: "",
  category: "",
};

export const errorValues = {
  name: {
    invalid: "Invalid drug name",
    required: "Drug Name is required",
  },
  sideEffect: {
    required: "Side effects are required",
  },
  instruction: {
    required: "Usage instruction is required",
  },
  minStockLevel: {
    required: "Minimum stock level is required",
  },
  strength: {
    required: "Strength is required",
  },
  dosage: {
    required: "Dosage is required",
  },
};

export const registerValidationSchema = Yup.object({
  name: Yup.string()
    .required(errorValues.name.required)
    .matches(/^[a-zA-Z0-9\s]+$/, errorValues.name.invalid),
  instruction: Yup.string().required(errorValues.instruction.required),
  sideEffects: Yup.string().required(errorValues.sideEffect.required),
  dosage: Yup.string().required(errorValues.dosage.required),
  minStockLevel: Yup.string().required(errorValues.sideEffect.required),
  strength: Yup.string().required(errorValues.strength.required),
});
