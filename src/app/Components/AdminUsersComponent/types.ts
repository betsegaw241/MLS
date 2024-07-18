import { IuserData } from "app/Pages/AdminUsersPage/slice/types";

export interface StockComponentProps {
  loading: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  // setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  // setCatagory: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
  // onFilter: () => void;
  page: number;
  endIndex: number;
  startIndex: number;
  users: IuserData;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  handleFilterUser: (value: string) => void;
  handleManageUser: (value: string, user: string) => void;
}
