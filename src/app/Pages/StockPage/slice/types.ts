export interface PharmacyStockPageState {
  errorMessage: string;
  isDrugAdded: boolean;
  loading: boolean;
  drugsList: IDrug[];
}
export interface IDrug {
  name: string;
  _id: string;
  batch: string;
  quantity: number;
  expiredDate: Date;
}
