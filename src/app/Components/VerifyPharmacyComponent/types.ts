import { IpharmacyData } from "app/Pages/AdminVerifyPharmacy/slice/types";

export interface VerifypharmaciesComponentProps {
  loading: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
  // onFilter: () => void;
  intialValues: IntialValues;
  page: number;
  admins: Iadmins[];
  pharmacies: IpharmacyData;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  handleFilterUser: (value: string) => void;
  handleAssign: (value: IntialValues) => void;
}

interface Iadmins {
  label: string;
  value: string;
}

export interface IntialValues {
  admin: string;
  quantity: string;
}
