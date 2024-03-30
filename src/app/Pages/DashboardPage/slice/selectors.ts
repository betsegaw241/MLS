import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.dashboard || initialState;

export const selectDashboard = createSelector([selectSlice], (state) => state);

export const selectpharmacy = createSelector(
  [selectSlice],
  (state) => state.pharmcy
);
export const selectpharmacyId = createSelector(
  [selectSlice],
  (state) => state.pharmcy._id
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
