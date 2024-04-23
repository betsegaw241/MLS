import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.feedbacks || initialState;

export const selectFeedbacksState = createSelector(
  [selectSlice],
  (state) => state
);
export const selectFeedbacks = createSelector(
  [selectSlice],
  (state) => state.feedbacks
);
export const selectIsLoading = createSelector(
  [selectSlice],
  (state) => state.loading
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
export const selectIsDeleted = createSelector(
  [selectSlice],
  (state) => state.isDeleted
);
