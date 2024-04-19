import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.getUsersList || initialState;

export const selectUsersState = createSelector(
  [selectSlice],
  (state) => state
);
export const selectUsers = createSelector(
  [selectSlice],
  (state) => state.usersList
);
export const selectIsLoading = createSelector(
  [selectSlice],
  (state) => state.loading
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
