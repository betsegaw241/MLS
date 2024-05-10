import { user } from "app/Pages/AdminUsersPage/slice/types";

export interface CreateFeedbackPageState {
  errorMessage: string;
  loading: boolean;
  isCreated: boolean;
  feedbacks: IFeedbackData;
}

export interface IFeedbackData {
  data: Feedback[];
  totalPages: number;
}
export interface Feedback {
  _id: string;
  userId: string;
  title: string;
  content: string;
  type: "complaint" | "suggestion" | "question";
  replayedTo?: string;
  status: "pending" | "replayed" | "closed";
  feedbackId?: string;
  createdAt: Date;
  updatedAt?: Date;
  user: user;
}
