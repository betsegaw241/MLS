import { FormValues } from "app/Pages/ProfilePage/types";

export interface editProfileComponentProp {
  initialValues: FormValues;
  EditSchema: object;
  isEditing: boolean;
  onSaveClick: (values: FormValues) => void;
  errorMessage: string;
}

