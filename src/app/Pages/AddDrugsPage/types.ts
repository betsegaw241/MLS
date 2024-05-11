/* --- STATE --- */

export interface AddDrugState {
  errorMessage: string;
  loading: boolean;
}

export interface IDrugStock {
  drug: string;
  batchNumber: string;
  quantity: number | null;
  recievedFrom: string;
  cost: number | null;
  price: number | null;
  expiredDate: Date | undefined;
}
