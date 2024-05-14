import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state?.addPharmacy || initialState;

export const selectCreateAccountPage = createSelector(
  [selectSlice],
  (state) => state
);

export const selectIsAcountCreated = createSelector(
  [selectSlice],
  (state) => state.isAccountCreated
);
export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
export const selectCreating = createSelector(
  [selectSlice],
  (state) => state.isCreatingAccount
);
