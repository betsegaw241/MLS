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
  createAccountSchemaStep2?: object;
  createAccountSchemaStep3?: object;
  currentStep: number;

  initialValues: FormValues;
  // signupSchema: object;
  // isSigningup: boolean;
  errorMessage: string;
  UploadingDocument: boolean;

  userItialValues: UserFormValues;
  set1Data: UserFormValues | null;
  set2Data: ParmacyFormValues | null;
  documentItialValues: DocumentFormValues;
  pharmacyItialValues: ParmacyFormValues;
  handleStep1: (values: UserFormValues) => void;
  handleStep2: (values: ParmacyFormValues) => void;
  onSignupClick: (values: DocumentFormValues) => void;
  back: () => void;
}
