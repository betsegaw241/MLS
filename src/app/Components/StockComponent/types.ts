export interface StockComponentProps {
  loading: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
  setCatagory: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
  onFilter: () => void;
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
  totalPages: number;
}
