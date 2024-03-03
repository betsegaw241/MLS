export interface editProfileComponentProp {
  initialValues: IProfile;
  EditSchema: object;
  isEditing: boolean;
  profile: (file: File) => void;
  onSaveClick: (values: IProfile) => void;
  errorMessage: string;
}

export interface IProfile {
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  avatar: string;
}