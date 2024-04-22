import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdminProfilePageState } from "./types";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { AdminProfilePageSaga } from "./saga";

export const initialState: AdminProfilePageState = {
  errorMessage: "",
  isEditing: false,
  isgettingUser: false,
  isUserExist: false,
  ischangingPassword: false,
  profile: {
    phone: "",
    avatar: "",
    confirmPassword: "",
    currentPassword: "",
    newPassword: "",
    firstName: "",
    lastName: "",
    email: "",
  },
  passwordChanged: false,
};
const slice = createSlice({
  name: "editProfile",
  initialState,
  reducers: {
    editProfile: (state, action: PayloadAction<any>) => {
      state.isEditing = true;
    },
    editProfileSuccess: (state, action: PayloadAction<any>) => {
      state.isEditing = false;
      state.profile.avatar = action.payload.avatar;
      state.profile.phone = action.payload.phone;
    },
    editProfileFailed: (state, action: PayloadAction<any>) => {
      state.isEditing = false;
      state.errorMessage = action.payload;
    },
    getUser: (state, action: PayloadAction<any>) => {
      state.isgettingUser = true;
    },
    getUserSuccess: (state, action: PayloadAction<any>) => {
      state.isgettingUser = false;
      state.isUserExist = true;
      const nameParts = action.payload.name.split(" ");
      state.profile.firstName = nameParts[0];
      state.profile.lastName = nameParts[1];
      state.profile.email = action.payload.email;
      state.profile.avatar = action.payload.avatar;
      state.profile.phone = action.payload.phoneNumber;
    },
    getUserFailed: (state, action: PayloadAction<any>) => {
      state.isgettingUser = false;
      state.errorMessage = action.payload;
    },
    changePassword: (state, action: PayloadAction<any>) => {
      state.ischangingPassword = true;
    },
    changePasswordSuccess: (state, action: PayloadAction<any>) => {
      state.ischangingPassword = false;
      state.passwordChanged = true;
    },
    changePasswordFailed: (state, action: PayloadAction<any>) => {
      state.ischangingPassword = false;
      state.errorMessage = action.payload;
    },
  },
});
export const { actions: EditProfilePageActions } = slice;

export const useAdminProfilePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: AdminProfilePageSaga });
  return { actions: slice.actions };
};