import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.login || initialState;

export const selectDefaultLayout = createSelector(
  [selectSlice],
  (state) => state
);

export const selectUser = createSelector([selectSlice], (state) => state.user);
export const selectRole = createSelector([selectSlice], (state) => state.role);
export const selectMode = createSelector([selectSlice], (state) => state.mode);
export const selectIsLogging = createSelector(
  [selectSlice],
  (state) => state.isLogging
);
export const selectIsLoading = createSelector(
  [selectSlice],
  (state) => state.loading
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);

export const selectIsAuthenticated = createSelector(
  [selectSlice],
  (state) => state.isAuthenticated
);

export const selectRedirectTo = createSelector(
  [selectSlice],
  (state) => state.redirectTo
);

export const selectOtpSent = createSelector(
  [selectSlice],
  (state) => state.otpSent
);

export const selectOtpVerified = createSelector(
  [selectSlice],
  (state) => state.otpVerified
);

export const selectPasswordChanged = createSelector(
  [selectSlice],
  (state) => state.passwordResetted
);
