export interface DrugDetailComponent {
  errorMessage: string;
  drug: IDrug;
  drugStock: IDrugdata;
  loading: boolean;
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
