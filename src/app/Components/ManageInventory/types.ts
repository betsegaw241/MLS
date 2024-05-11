import { Drug, Drugs } from "app/Pages/ManageInventoryPage/slice/types";
export interface InventoryComponentProps {
  drugs: Drug[];
  currentPage: number;
  recentlyadded: Drug[];
  lowStockDrug: Drugs;
  pages: number;
  onPageChange: any;
  expiredDrugs: Drugs;
}

