import { IUser } from "app/models/user";

export interface ReviewsPageState {
  loading: boolean;
  reviews: IreviewData;
  errorMessage: string;
}

export interface Ireview {
  pharmacyId: string;
  rating: number;
  feedback: string;
  reviewedBy: string;
  createdAt: Date;
  customer: IUser;
}

export interface IreviewData {
  data: Ireview[];
  totalPages: number;
  totalDocuments: number;
}
