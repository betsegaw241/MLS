import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.registerSell || initialState;

export const selectRegisterSellgState = createSelector(
  [selectSlice],
  (state) => state
);
export const selectLoading = createSelector(
  [selectSlice],
  (state) => state.loading
);
export const selectIsAdded = createSelector(
  [selectSlice],
  (state) => state.isRegsterd
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
