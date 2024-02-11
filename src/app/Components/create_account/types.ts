//import { FormValues } from "../../components/create_account/types";
export interface create_accountProps {}

export const initialValues: FormValues = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  
};
import { FormValues } from "app/Pages/createAccountPage/types";
export interface SignupComponentProp {
  initialValues: FormValues;
  signupSchema: object;
  // isSigningup: boolean;
  onSignupClick: (values: FormValues) => void;
  errorMessage: string;
}