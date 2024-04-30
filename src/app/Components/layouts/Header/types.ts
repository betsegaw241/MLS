export interface feedbackComponentProp {
  initialValues: IFeedback;
  feedbackSchema: object;
  errorMessage: string;
  onSaveClick: (values: IFeedback) => void;
}
export interface IFeedback {
  title: String;
  message: String;
}