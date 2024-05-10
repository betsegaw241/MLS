export interface feedbackPageState {
  feedback: IFeedback;
  errorMessage: string;
}
// export interface PayloadType {
//   id: string;
//   user: IProfile;
// }
export interface IFeedback {
  title: String;
  message: String;
}
