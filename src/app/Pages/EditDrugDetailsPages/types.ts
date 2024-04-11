export interface EditDrugDetailsPageState {
  errorMessage: string;
  loading: boolean;
  drug: Drug;
}

export interface Drug {
  name: string;
  dosage: string;
  strength: string;
  sideEffects: string;
  instruction: string;
  minStockLevel: string;
  category: string;
  drugPhoto: string[];
  needPrescription: boolean;
}
