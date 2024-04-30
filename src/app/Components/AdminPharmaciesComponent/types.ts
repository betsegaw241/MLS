import { IpharmacyData } from "app/Pages/AdminPharmaciesPage/slice/types";

export interface pharmaciesComponentProps {
  loading: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
  // onFilter: () => void;
  page: number;
  pharmacies: IpharmacyData;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  handleFilterUser: (value: string) => void;
}
