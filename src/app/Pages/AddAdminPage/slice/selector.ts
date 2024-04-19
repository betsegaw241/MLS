import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state?.addAdmin || initialState;

export const selectAddAdminPage = createSelector(
  [selectSlice],
  (state) => state
);

export const selectAccount = createSelector(
  [selectSlice],
  (state) => state.account
);
