export interface editProfilePageState {
  isAuthenticated: any;
  isCreating: any;
  profile: IProfile;
  errorMessage: string;
  isEditing: boolean;
  isgettingUser: boolean;
  isUserExist: boolean;
}
export interface PayloadType {
  id: string;
  user: string;
}
export interface IProfile {
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  avatar: string;
}
