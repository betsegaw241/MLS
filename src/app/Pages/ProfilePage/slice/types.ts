export interface editProfilePageState {
  isAuthenticated: any;
  isCreating: any;
  profile: IProfile;
  errorMessage: string;
  isEditing: boolean;
  isgettingUser: boolean;
  isUserExist: boolean;
  ischangingPassword: boolean;
  passwordChanged: boolean;
  edited: boolean;
}
export interface PayloadType {
  id: string;
  user: IProfile;
}
export interface IProfile {
  id: string;
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  avatar: string;
  confirmPassword: String;
  currentPassword: String;
  newPassword: String;
}
