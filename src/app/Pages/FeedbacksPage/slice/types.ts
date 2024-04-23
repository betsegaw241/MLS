export interface FeedbackPageState {
  errorMessage: string;
  loading: boolean;
  isDeleted:boolean;
  feedbacks: IFeedbackData;
}

export interface IFeedbackData {
  data: Feedback[];
  totalPages: number;
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
