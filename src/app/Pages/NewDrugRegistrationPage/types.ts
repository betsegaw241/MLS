/* --- STATE --- */

export interface AddDrugState {
  errorMessage: string;
  loading: boolean;
  drug: Drug;
}

export interface Drug {
  name: string;
  usage: string;
  dosage: string;
  unitOfIssue: string;
  sideEffects: string;
  unitPrice: string;
  // cost;
  drugPhoto: string;
  // category;
  ingredients: string;
  instruction: string;
  strength: string;
  minStockLevel: string;
  needPrescription: boolean;
}
