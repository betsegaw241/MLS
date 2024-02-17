import { FormValues } from "app/Pages/AddPharmacyPage/types";

export interface AddPharmacyComponentProps {
  errorMessage: string;
  initialValues: FormValues;
  handleAddpharmacy: (values: FormValues) => void;
}
