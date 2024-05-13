export interface DrugDetailPageState {
  errorMessage: string;
  isDrugAdded: boolean;
  loading: boolean;
  drugDetail: IDrug;
  drugStock: IDrugdata;
}
export interface IDrug {
  cost: string;
  currentQuantity: string;
  price: string;
  expiredDate: string | number | Date;
  recievedFrom: string;
  quantity: string;
  batchNumber: string;
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
  data: IDrug[];
  totalPages: number;
}

export interface IDrugStock {}
