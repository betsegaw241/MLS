import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state?.addPharmacy || initialState;

export const selectAddPharmacyPage = createSelector(
  [selectSlice],
  (state) => state
);

export const selectAccount = createSelector(
  [selectSlice],
  (state) => state.account
);
export const selectedAccountCreated = createSelector(
  [selectSlice],
  (state) => state.isAccountCreated
);