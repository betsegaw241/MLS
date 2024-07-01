import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state?.createAccount || initialState;

export const selectCreateAccountPage = createSelector(
  [selectSlice],
  (state) => state
);

export const selectIsAcountCreated = createSelector(
  [selectSlice],
  (state) => state.isAcountCreated
);
export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
export const selectCreating = createSelector(
  [selectSlice],
  (state) => state.isCreatingAccount
);
