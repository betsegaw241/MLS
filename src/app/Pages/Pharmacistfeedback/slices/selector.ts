import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.feedbacks || initialState;

export const selectFeedbackPage = createSelector(
  [selectSlice],
  (state) => state
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
export const selectFeedback = createSelector(
  [selectSlice],
  (state) => state.feedbacks
);
