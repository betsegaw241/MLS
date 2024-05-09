import { IpharmacyData } from "app/Pages/AdminPharmaciesPage/slice/types";

export interface pharmaciesComponentProps {
  loading: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
  // onFilter: () => void;
  admins?: Iadmins[];
  page: number;
  pharmacies: IpharmacyData;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  handleFilterUser?: (value: string) => void;
  handleAssign?: (value: IntialValues) => void;
}

interface Iadmins {
  label: string;
  value: string;
}

export interface IntialValues {
  admin: string;
  quantity: string;
}
