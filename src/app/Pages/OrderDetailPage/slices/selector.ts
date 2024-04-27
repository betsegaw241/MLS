import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state?.orderDetailSlice || initialState;

export const selectOrder = createSelector(
  [selectSlice],
  (state) => state.order
);
export const selectOrderExist = createSelector(
  [selectSlice],
  (state) => state.isOrderExist
);

export const selectloading = createSelector(
  [selectSlice],
  (state) => state.isgettingOrder
);
export const selectIsUpdating = createSelector(
  [selectSlice],
  (state) => state.isUpdating
);

