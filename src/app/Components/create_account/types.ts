//import { FormValues } from "../../components/create_account/types";
export interface create_accountProps {}

import {
  FormValues,
  UserFormValues,
  DocumentFormValues,
  ParmacyFormValues,
} from "app/Pages/createAccountPage/types";

export interface CreateAccountComponentProp {
  createAccountSchemaStep1: object;
  currentStep: number;
  initialValues: FormValues;
  creatingAccount: boolean;
  errorMessage: string;
  userItialValues: UserFormValues;
  set1Data: UserFormValues | null;
  documentItialValues: DocumentFormValues;
  pharmacyItialValues: ParmacyFormValues;
  handleSignUp: (values: UserFormValues) => void;
}
