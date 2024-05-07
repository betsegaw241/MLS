import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.createPassword || initialState;

export const selectCreateAdminPwdPage = createSelector(
  [selectSlice],
  (state) => state
);
export const selectISPasswordCreated = createSelector(
  [selectSlice],
  (state) => state.isPasswordCreated
);

