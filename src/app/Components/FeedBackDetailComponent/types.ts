import { Feedback } from "app/Pages/FeedbackDetail/slice/types";

export interface FeedbackDetailProps {
  feedback: Feedback;
  handleDeleteFeedback: () => void;
}
