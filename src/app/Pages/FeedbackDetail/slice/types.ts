import { user } from "app/Pages/AdminUsersPage/slice/types";

export interface FeedbackDetailPageState {
  errorMessage: string;
  loading: boolean;
  isDeleted: boolean;
  feedback: Feedback;
}

export interface Feedback {
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
