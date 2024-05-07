export interface editProfileComponentProp {
  initialValues: IProfile;
  PinitialValue: ChangePassword;
  EditSchema: object;
  isEditing: boolean;
  PasswordValidationSchema: Object;
  ischangingPassword: boolean;
  profile: (file: File) => void;
  onSaveClick: (values: IProfile) => void;
  changePassword: (values: any) => void;
  errorMessage: string;
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
export interface ChangePassword {
  confirmPassword: String;
  currentPassword: String;
  newPassword: String;
}
