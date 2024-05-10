import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { GetFeedbacksListSaga } from "./saga";
import { IFeedbackData, FeedbackPageState } from "./types";

export const initialState: FeedbackPageState = {
  errorMessage: "",
  loading: false,
  isDeleted: false,
  feedbacks: {} as IFeedbackData,
  isCreated: false
};

const slice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {
    getFeedbacks: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getFeedbacksSuccess: (state, action: PayloadAction<any>) => {
      state.feedbacks = action.payload;
      state.loading = false;
    },
    getFeedbacksFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.loading = false;
    },
    deleteFeedbacks: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    deleteFeedbacksSuccess: (state, action: PayloadAction<any>) => {
      // state.FeedbacksList = action.payload;
      state.loading = false;
    },
    deleteFeedbacksFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.loading = false;
    },
    createFeedbacks: (state, action: PayloadAction<any>) => {
      state.loading = true;
      
    },
    createFeedbacksSuccess: (state, action: PayloadAction<any>) => {
      // state.FeedbacksList = action.payload;
      state.loading = false;
    },
    createFeedbacksFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: getFeedbacksActions } = slice;

export const UseGetFeedbacksSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: GetFeedbacksListSaga });
  return { actions: slice.actions };
};
