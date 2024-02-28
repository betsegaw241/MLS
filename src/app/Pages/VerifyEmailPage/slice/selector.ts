import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.verifyAccount || initialState;

export const selectVerifyAccountPage = createSelector(
  [selectSlice],
  (state) => state
);

export const selectIsAcountVerified = createSelector(
  [selectSlice],
  (state) => state.isAcountVerified
);
export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
export const selectVerifying = createSelector(
  [selectSlice],
  (state) => state.isVerifyingAccount
);
