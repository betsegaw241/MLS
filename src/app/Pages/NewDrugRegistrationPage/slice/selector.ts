import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.registerDrug || initialState;

export const selectAddDrugState = createSelector(
  [selectSlice],
  (state) => state
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
