import { IProfile } from "../ProfileComponent/types";

export interface AdminProfileComponentProps {
  handleChangePassword: (values: any) => void;
  data: IProfile;
  errorMessage: string;
  ischangingPassword: boolean;
}
