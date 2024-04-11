export interface EditDrugDetailsComponentProps {
  drug: Drug;
  Edit: (values: Drug) => void;
  setSelectedImages: (images: File[]) => void;
}
export interface Drug {
  name: string;
  dosage: string;
  sideEffects: string;
  instruction: string;
  strength: string;
  minStockLevel: string;
  category: string;
  drugPhoto: string[];
  needPrescription: boolean;
}
