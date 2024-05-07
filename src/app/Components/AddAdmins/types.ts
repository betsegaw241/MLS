import { FormValues } from "app/Pages/AddAdminPage/types";

export interface AddAdminProps {
  errorMessage: string;
  addAdminValidationSchema:Object;
  initialValues: FormValues;
  handleAddAdmin: (values: FormValues) => void;
}
