export interface AdminProfilePageState {
  profile: IProfile;
  errorMessage: string;
  isEditing: boolean;
  isgettingUser: boolean;
  isUserExist: boolean;
  ischangingPassword: boolean;
  passwordChanged: boolean;
}
export interface PayloadType {
  id: string;
  user: IProfile;
}
export interface IProfile {
  _id: string;
  name: String;
  email: String;
  phone: String;
  avatar: string;
  coverPhoto: string;
  confirmPassword: String;
  currentPassword: String;
  newPassword: String;
  role: string;
}
