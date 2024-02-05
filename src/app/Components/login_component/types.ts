import { FormValues } from 'app/Pages/Login/types';
export interface LoginInComponentProp {
  initialValues: FormValues;
  loginInSchema: object; 
  isLogging: boolean;
  onLoginClick: (values: FormValues) => void;
  errorMessage:string;
}
export interface LoginCarouselItemProps {
  url:string
}
