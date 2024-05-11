/* --- STATE --- */


interface Drug {
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
}