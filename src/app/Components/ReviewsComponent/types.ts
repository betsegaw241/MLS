import { Ireview } from "app/Pages/ReviewsPgae/slice/types";
import { Ipharmacy } from "../PharmacyAccountComponent/types";

export interface ReviewComponentProps {
  reviews: Ireview[];
  totalPages: number;
  pharmacy: Ipharmacy;
  totalDocuments: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  page: number;
}
