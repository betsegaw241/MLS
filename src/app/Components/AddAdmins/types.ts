import { FormValues } from "app/Pages/AddAdminPage/types";

export interface AddAdminProps {
  errorMessage: string;
  addAdminValidationSchema: Object;
  initialValues: FormValues;
  isCreated: boolean;
  loading:boolean;
  handleAddAdmin: (values: FormValues) => void;
}
