export interface userInfoComponentProp {
  initialValues: IFeedback;
  errorMessage: string;
   setType: React.Dispatch<React.SetStateAction<string>>;
   isCreated:boolean;
  handleCreateFeedback: (value: IFeedback) => void;
}
export interface IFeedback {
  title: String;
  content: String;
}