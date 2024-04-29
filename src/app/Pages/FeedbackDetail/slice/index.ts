import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { GetFeedbackListSaga } from "./saga";
import { Feedback, FeedbackDetailPageState } from "./types";

export const initialState: FeedbackDetailPageState = {
  errorMessage: "",
  loading: false,
  isDeleted: false,
  feedback: {} as Feedback,
};

const slice = createSlice({
  name: "feedbacksDetail",
  initialState,
  reducers: {
    getFeedback: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getFeedbackSuccess: (state, action: PayloadAction<any>) => {
      state.feedback = action.payload;
      state.loading = false;
    },
    getFeedbackFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.loading = false;
    },
    deleteFeedbacks: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    deleteFeedbacksSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.isDeleted = true;
    },
    deleteFeedbacksFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.loading = false;
      state.isDeleted = false;
    },
  },
});

export const { actions: getFeedbacksActions } = slice;

export const UseGetFeedbacksDetailSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: GetFeedbackListSaga });
  return { actions: slice.actions };
};
