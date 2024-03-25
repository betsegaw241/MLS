import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.orderSlice || initialState;


export const selectOrder = createSelector(
  [selectSlice],
  (state) => state.order
);
export const selectOrderExist = createSelector(
  [selectSlice],
  (state) => state.isOrderExist
);

