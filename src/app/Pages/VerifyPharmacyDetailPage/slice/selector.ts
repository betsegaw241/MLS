import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state?.verifyPharmacyDetail || initialState;

export const selectPharmacyState = createSelector(
  [selectSlice],
  (state) => state
);
export const selectPharmacy = createSelector(
  [selectSlice],
  (state) => state.pharmacy
);
export const selectIsLoading = createSelector(
  [selectSlice],
  (state) => state.loading
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
export const selectisVerified = createSelector(
  [selectSlice],
  (state) => state.verified
);
