import { IDrugdata } from "app/Pages/DrugDetailPage/slice/types";

export interface DrugDetailComponent {
  errorMessage: string;
  drug: IDrug;
  drugStock: IDrugdata;
  loading: boolean;
  page: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}
export interface IDrug {
  name: string;
  _id: string;
  category: string;
  stockLevel: string;
  instruction: string;
  sideEffects: string;
  drugPhoto: string[];
}


export interface IDrugStock {
  _id: string;
  batchNumber: string;
  expiredDate: string;
  quantity: number;
  recievedFrom: string;
  cost: string;
  price: string;
  createdAt: string;
}
