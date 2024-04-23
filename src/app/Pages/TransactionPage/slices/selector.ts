import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state?.transactionSlice || initialState;

export const selectTransaction = createSelector([selectSlice], (state) => state.transaction);
export const selectTransactionExist = createSelector(
  [selectSlice],
  (state) => state.isTransactionExist
);

