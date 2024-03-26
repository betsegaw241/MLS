export const initialValues: FormValues = {
  drug: "",
  batchNumber: "",
  expiredDate: "",
  quantity: 0,
  price: "",
  cost: "",
  recievedFrom: "",
};
export interface FormValues {
  drug: string;
  batchNumber: string;
  expiredDate: string;
  quantity: number;
  recievedFrom: string;
  cost: string;
  price: string;
}
