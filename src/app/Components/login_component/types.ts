import { FormValues } from "app/Pages/Login/types";
export interface LoginInComponentProp {
  initialValues: FormValues;
  loginInSchema: object;
  isLogging: boolean;
  onLoginClick: (values: FormValues) => void;
  forgetPassword: (value: IforgetPasswordIntialValue) => void;
  errorMessage: string;
  OtpSent: boolean;
  OtpVerified: boolean;
  loading: boolean;
  handleVerifyOtp: (values: any) => void;
}
export interface LoginCarouselItemProps {
  url: string;
}

export const forgetPasswordIntialValue: IforgetPasswordIntialValue = {
  email: "",
};

export interface IforgetPasswordIntialValue {
  email: string;
}
