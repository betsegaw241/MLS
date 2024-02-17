//import { FormValues } from "../../components/create_account/types";

export const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  
};
import { FormValues } from "app/Pages/createAccountPage/types";
export interface SignupComponentProp {
  initialValues: FormValues;
  signupSchema: object;
  // isSigningup: boolean;
  onSignupClick: (values: FormValues) => void;
  errorMessage: string;
}
