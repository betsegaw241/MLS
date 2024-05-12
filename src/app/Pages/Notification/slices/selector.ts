import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state?.notificationSlice || initialState;

export const selectNotification = createSelector(
  [selectSlice],
  (state) => state.notification
);
export const selectNotificationExist = createSelector(
  [selectSlice],
  (state) => state.isNotificationExist
);
export const selectCount = createSelector(
  [selectSlice],
  (state) => state.count
);
export const selectLoading = createSelector(
  [selectSlice],
  (state) => state.isgettingNotification
);
