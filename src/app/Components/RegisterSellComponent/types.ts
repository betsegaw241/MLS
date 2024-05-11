import { IDrugdata } from "../DrugDetailsComponent/types";

export interface RegistersellProps {
  drugs: IDrug[];
  drugStck: IDrugdata;
  loading: boolean;
  Loading: boolean;
  registerd: boolean;
  page: number;
  setDrug: React.Dispatch<React.SetStateAction<string>>;
  setBatch: React.Dispatch<React.SetStateAction<string>>;
  handleRegister: (values: FormValues) => void;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}
export const initialValues: FormValues = {
  drug: "",
  batch: "",
  quantity: "",
};
export interface FormValues {
  drug: string;
  batch: string;
  quantity: string;
}
export interface IDrug {
  value: string;
  label: string;
}
