import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.editProfile || initialState;

export const selectEditProfilePage = createSelector(
  [selectSlice],
  (state) => state
);
export const selectIsEditing = createSelector(
  [selectSlice],
  (state) => state.isEditing
);
export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
export const selectIsAuthenticated = createSelector(
  [selectSlice],
  (state) => state.isAuthenticated
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
export const selectid = createSelector(
  [selectSlice],
  (state) => state.profile.id
);
export const selectEdited = createSelector(
  [selectSlice],
  (state) => state.edited
);
