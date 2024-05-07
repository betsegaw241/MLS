export interface RegistersellProps {
  drugs: IDrug[];
  loading: boolean;
  handleRegister: (values: FormValues) => void;
}
export const initialValues: FormValues = {
  drug: "",
  batchNumber: "",
  quantity: '',
};
export interface FormValues {
  drug: string;
  batchNumber: string;
  quantity: string ;
}
export interface IDrug {
  value: string;
  label: string;
}
