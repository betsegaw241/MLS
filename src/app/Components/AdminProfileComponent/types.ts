import { IProfile } from "app/Pages/AdminProfilePage/slice/types";


export interface AdminProfileComponentProps {
  handleChangePassword: (values: any) => void;
  profile: IProfile;
  errorMessage: string;
  ischangingPassword: boolean;
}
