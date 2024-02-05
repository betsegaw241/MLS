import { FormValues } from "../../components/create_account/types";
export interface create_accountProps {}

export const initialValues: FormValues = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  
};

// export enum RoleEnum {
//   diaspora = "diaspora",
//   bank = "bank",
//   admin = "admin",
//   telephonist = "telephonist",
// }

// export type RolesType = {
//   value: RoleEnum;
//   label: string;
// };
