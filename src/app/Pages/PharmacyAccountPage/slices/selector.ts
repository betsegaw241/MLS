import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state?.pharmacyAccount || initialState;

export const selectPharmacy = createSelector(
  [selectSlice],
  (state) => state.pharmacy
);
export const selectLoading = createSelector(
  [selectSlice],
  (state) => state.isLoading
);
export const selectUpdated = createSelector(
  [selectSlice],
  (state) => state.isUpdated
);
export const selectLink = createSelector(
  [selectSlice],
  (state) => state.link
);
export const selectBanks = createSelector(
  [selectSlice],
  (state) => state.banks
);