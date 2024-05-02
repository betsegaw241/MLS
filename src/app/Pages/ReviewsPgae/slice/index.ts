import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReviewsPageState, Ireview, IreviewData } from "./types";
import { ReviewPageSaga } from "./saga";
import { useInjectReducer, useInjectSaga } from "redux-injectors";

export const initialState: ReviewsPageState = {
  loading: false,
  reviews: {} as IreviewData,
  errorMessage: "",
};

const slice = createSlice({
  name: "reviewPage",
  initialState,
  reducers: {
    fetchReviews: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    fetchReviewsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.reviews = action.payload;
    },
    fetchReviewsFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { actions: ReviewPageActions } = slice;

export const UseReviewPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ReviewPageSaga });
  return { actions: slice.actions };
};
