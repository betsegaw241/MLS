export interface PharmacyStockPageState {
  errorMessage: string;
  isDrugAdded: boolean;
  loading: boolean;
  drugsList: IDrugdata;
}
export interface IDrug {
  name: string;
  _id: string;
  min_sockLevel: string;
  quantity: number;
  expiredDate: Date;
  category: string;
  stockLevel: string;
  stock_Level: string;
  price: string;
}
export interface IDrugdata {
  data: IDrug[];
  totalPages: number;
}
