export interface addDrugPageState {
  errorMessage: string;
  isDrugAdded: boolean;
  loading: boolean;
  drug: IDrug[];
}
export interface IDrug {
  name: string;
  _id: string;
  batch: string;
  quantity: number;
  expiredDate: Date;
}
