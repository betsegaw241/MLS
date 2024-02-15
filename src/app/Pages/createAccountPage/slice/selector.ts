import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state?.createAccountPage || initialState;

export const selectCreateAccountPage = createSelector(
  [selectSlice],
  (state) => state
);

export const selectAccount = createSelector(
  [selectSlice],
  (state) => state.account
);
