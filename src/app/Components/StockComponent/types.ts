export interface StockComponentProps {
  loading: boolean;
  page: number;
  drugs: IDrugdata;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
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
  totalDocuments: number;
}
