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
  category: string;
  stockLevel: string;
  instruction: string;
  sideEffects: string;
  minStockLevel: string;
  drugPhoto: string[];
  needPrescription: boolean;
  dosage: string;
  strength: string;
}

export interface IDrugdata {
  data: IDrugStock[];
  totalPages: number;
}

export interface IDrugStock {
  batchNumber: string;
  expiredDate: string;
  quantity: number;
  recievedFrom: string;
  cost: string;
  price: string;
  createdAt: string;
}
