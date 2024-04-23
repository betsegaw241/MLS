export interface FeedbackComponentProps {
  feedbacks: Feedback[];
  totalPages: number;
  page: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  handleFilterType: (value: string) => void;
  handleFilterStatus: (value: string) => void;
  handleDelete: (value: string) => void;
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
}
