export interface PharmacyStockPageState {
  errorMessage: string;
  isDrugAdded: boolean;
  loading: boolean;
  drugsList: IDrugdata;
}
export interface IDrug {
  name: string;
  _id: string;
  minStockLevel: string;
  quantity: number;
  expiredDate: Date;
  category: string;
  stockLevel: string;
  stock_Level: string;
  price: string;
  needPrescription:boolean;
}
export interface IDrugdata {
  data: IDrug[];
  totalPages: number;
}
