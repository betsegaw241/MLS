import { IpharmacyData } from "app/Pages/AdminVerifyPharmacy/slice/types";

export interface VerifypharmaciesComponentProps {
  loading: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
  // onFilter: () => void;
  page: number;
  pharmacies: IpharmacyData;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  handleFilterUser: (value: string) => void;
}
