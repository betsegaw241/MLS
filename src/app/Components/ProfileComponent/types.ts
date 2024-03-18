export interface editProfileComponentProp {
  initialValues: IProfile;
  EditSchema: object;
  isEditing: boolean;
  PasswordValidationSchema:Object;
  ischangingPassword: boolean;
  profile: (file: File) => void;
  onSaveClick: (values: IProfile) => void;
  changePassword: (values: IProfile) => void;
  errorMessage: string;
}
export interface IProfile {
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  avatar: string;
  confirmPassword: String;
  currentPassword: String;
  newPassword: String;
}
