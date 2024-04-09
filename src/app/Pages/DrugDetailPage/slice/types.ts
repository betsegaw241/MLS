export interface DrugDetailPageState {
  errorMessage: string;
  isDrugAdded: boolean;
  loading: boolean;
  drugDetail: IDrug;
  drugStock:IDrugStock;
}
export interface IDrug {
  name: string;
  _id: string;
  batch: string;
  quantity: number;
  expiredDate: Date;
}


export interface IDrugStock {
  drug: string;
  batchNumber: string;
  expiredDate: string;
  quantity: number;
  recievedFrom: string;
  cost: string;
  price: string;
}
