export interface DrugDetailPageState {
  errorMessage: string;
  isDrugAdded: boolean;
  loading: boolean;
  drugDetail: IDrug;
  drugStock: IDrugdata;
}
export interface IDrug {
  name: string;
  _id: string;
  batch: string;
  quantity: number;
  expiredDate: Date;
  category: string;
  stockLevel: string;
  instruction: string;
  sideEffects: string;
}

export interface IDrugdata {
  data: IDrugStock[];
}

export interface IDrugStock {
  batchNumber: string;
  expiredDate: string;
  quantity: number;
  recievedFrom: string;
  cost: string;
  price: string;
}