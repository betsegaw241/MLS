import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.editProfile || initialState;

export const selectAdminProfilePage = createSelector(
  [selectSlice],
  (state) => state
);
export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);

export const selectProfile = createSelector(
  [selectSlice],
  (state) => state.profile
);
export const selectUserExist = createSelector(
  [selectSlice],
  (state) => state.isUserExist
);
export const selectIsPasswordChanged = createSelector(
  [selectSlice],
  (state) => state.passwordChanged
);
export const selectIsChangingPassword = createSelector(
  [selectSlice],
  (state) => state.ischangingPassword
);
