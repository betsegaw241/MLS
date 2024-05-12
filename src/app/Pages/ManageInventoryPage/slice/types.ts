export interface ManageInventorState {
  totalPages: number;
  errorMessage: string;
  loading: boolean;
  drugs: Drugs;
  expiredDrugs: Drugs;
  recentlyadded: Drugs;
  lowStockDrug: Drugs;
  soonExpiringDrugs: Drugs;
}

export interface Drugs {
  data: Drug[];
  totalPages: number;
  totalDocuments: number;
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
