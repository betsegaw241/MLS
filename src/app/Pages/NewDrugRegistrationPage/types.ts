/* --- STATE --- */

export interface RegisterDrugPageState {
  errorMessage: string;
  loading: boolean;
  drug: Drug;
  drugadded: boolean;
}

export interface Drug {
  name: string;
  dosage: string;
  sideEffects: string;
  instruction: string;
  strength: string;
  minStockLevel: string;
  category: string;
  drugPhoto: string[];
  needPrescription: boolean;
}
