export interface changePasswordProp {
  initialValues: IProfile;
//   EditSchema: object;
//   isEditing: boolean;
//   profile: (file: File) => void;
  onSaveClick: (values: IProfile) => void;
  errorMessage: string;
}

export interface IProfile {
  confirmPassword: String;
  currentPassword: String;
  newPassword: String;
}
