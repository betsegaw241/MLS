import { FormValues } from "app/Pages/AddAdminPage/types";

export interface AddAdminProps {
  errorMessage: string;
  initialValues: FormValues;
  handleAddAdmin: (values: FormValues) => void;
}
