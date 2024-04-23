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
