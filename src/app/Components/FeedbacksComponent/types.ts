import { user } from "app/Pages/AdminUsersPage/slice/types";

export interface FeedbackComponentProps {
  feedbacks: Feedback[];
  totalPages: number;
  page: number;
  reset: boolean;
  resetFilter: () => void;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  handleFilterType: (value: string) => void;
  handleFilterByRole: (value: string) => void;
  handleDelete: (value: string) => void;
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
