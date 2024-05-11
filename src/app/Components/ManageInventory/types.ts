import { Drug } from "app/Pages/ManageInventoryPage/slice/types";
export interface InventoryComponentProps {
  drugs: Drug[];
  currentPage: number;
  recentlyadded: Drug[];
  lowStockDrug: Drug[];
  soonExpiringDrugs: Drug[];
  pages: number;
  onPageChange: any;
  expiredDrugs: Drug[];
}

