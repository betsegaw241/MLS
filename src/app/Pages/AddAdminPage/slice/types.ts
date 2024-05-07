
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
  isCreatingAccount: boolean;
  isAccountCreated: boolean;
  FormValues: values;
}
export interface values {
  firstName: string;
  lastName: string;
  adminEmailAddress: string;
  adminPhoneNumber: string;
  adminPassword: string;
}