
export interface addDrugPageState {
  errorMessage: string;
  loading: boolean;
  drug: IDrug[];
}
export interface IDrug {
  name: string;
  id: string;
  batch:string;
  quantity:number;
  expiredDate:Date
}