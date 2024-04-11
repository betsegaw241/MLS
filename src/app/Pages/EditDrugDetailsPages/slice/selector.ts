import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.editDrugDetail || initialState;

export const selectEditDrugDetailState = createSelector(
  [selectSlice],
  (state) => state
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
