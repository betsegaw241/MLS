import { FileObject } from "../types";

export interface Account {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  pharmacyName: string;
  pharmacyEmailAddress: string;
  pharmacyPhoneNumber: string;
  pharmacyLocation: string;
  pharmacyLicense: FileObject | null;
  pharmacistLicense: FileObject | null;
  nigdFikad: FileObject | null;
}

export interface createAccountPageState {
  account?: Account;
  errorMessage: string;
  isCreatingAccount: boolean;
}
