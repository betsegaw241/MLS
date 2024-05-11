import { FormValues } from "app/Pages/AddAdminPage/types";

export interface AddAdminProps {
  errorMessage: string;
  addAdminValidationSchema: Object;
  initialValues: FormValues;
  isCreated: boolean;
  handleAddAdmin: (values: FormValues) => void;
}
