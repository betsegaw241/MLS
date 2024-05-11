import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state?.manageInventory || initialState;

export const selectManageInventoryState = createSelector(
  [selectSlice],
  (state) => state
);


export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);

export const selectRecentDrugs = createSelector(
  [selectSlice],
  (state) => state.recentlyadded
);

export const selectLowStockDrugs = createSelector(
  [selectSlice],
  (state) => state.lowStockDrug
);
export const selectSoonExpiringDrugs = createSelector(
  [selectSlice],
  (state) => state.soonExpiringDrugs
);
export const selectExpiredDrugs = createSelector(
  [selectSlice],
  (state) => state.expiredDrugs
);