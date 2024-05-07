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
