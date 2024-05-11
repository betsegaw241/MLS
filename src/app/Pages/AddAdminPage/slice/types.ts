
export interface Account {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  adminName: string;
  adminEmailAddress: string;
  adminPhoneNumber: string;
  adminPassword: string;
}

export interface addAdminPageState {
  account?: Account;
  errorMessage: string;
  FormValues: values;
  isCreated: boolean;
}
export interface values {
  firstName: string;
  lastName: string;
  adminEmailAddress: string;
  adminPhoneNumber: string;
  adminPassword: string;
}