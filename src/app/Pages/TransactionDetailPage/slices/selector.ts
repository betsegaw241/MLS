import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state?.transactionDetailSlice || initialState;

export const selectTransaction = createSelector(
  [selectSlice],
  (state) => state.transaction
);
export const selectTransactionExist = createSelector(
  [selectSlice],
  (state) => state.isTransactionExist
);

export const selectloading = createSelector(
  [selectSlice],
  (state) => state.isgettingTransaction
);
