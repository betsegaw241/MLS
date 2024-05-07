export interface InventoryComponentProps {
  drugs: Drug[];
  currentPage: number;
  recentlyadded: Drug[];
  lowStockDrug: Drug[];
  soonExpiringDrugs: Drug[];
  pages: number;
  onPageChange: any;
}
export interface Drug {
  date: string;
  drug: string;
  expiration_date: string;
  recived: boolean;
  balance: number;
  id: string;
  _id: string;
  name: string;
  drugPhoto: string[];
  pharmacyId: string;
  category: string;
  instruction: string;
  sideEffects: string;
  strength: string;
  dosage: string;
  stockLevel: number;
  minStockLevel: number;
  needPrescription: boolean;
  totalSale: number;
  profit: number;
  status: "available" | "lowStock";
  createdAt: Date;
  updatedAt: Date;
}
