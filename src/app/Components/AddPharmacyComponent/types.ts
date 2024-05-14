import { FormValues } from "app/Pages/AddPharmacyPage/types";

export interface AddPharmacyComponentProps {
  errorMessage: string;
  initialValues: FormValues;
  loading: boolean;
  handleAddpharmacy: (values: FormValues) => void;
}
