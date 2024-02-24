import { FormValues } from "app/Pages/ProfilePage/types";

export interface editProfileComponentProp {
  //file<T extends File>(arg0: T): void;
  initialValues: FormValues;
  EditSchema: object;
  isEditing: boolean;
  file: (file: File) => void;
  onSaveClick: (values: FormValues) => void;
  errorMessage: string;
}

