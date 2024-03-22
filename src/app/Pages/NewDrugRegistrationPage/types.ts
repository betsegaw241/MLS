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
  sideEffect: string;
}
