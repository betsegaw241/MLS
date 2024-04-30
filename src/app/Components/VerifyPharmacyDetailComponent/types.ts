import { IpharmacyData } from "app/Pages/AdminVerifyPharmacy/slice/types";

export interface verifyPharmacyProps {
  pharmacies: IpharmacyData;
  loading: boolean;
  //   setQuery,
  //   onSearch,
  page: number;
  handlePageChange: () => void;
  handleFilterUser: () => void;
}
