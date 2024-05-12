import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { editProfilePageState } from "./types";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { EditProfilePageSaga } from "./saga";
import showToast from "utils/toast";

export const initialState: editProfilePageState = {
  isAuthenticated: false,
  isCreating: false,
  errorMessage: "",
  isEditing: false,
  isgettingUser: false,
  isUserExist: false,
  ischangingPassword: false,
  profile: {
    id: "",
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
  edited: false,
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
      state.edited = true;
      state.profile.avatar = action.payload.avatar;
      state.profile.phone = action.payload.phone;
      localStorage.setItem("avatar", action.payload.user.avatar);
      showToast("User edited Sucessfully", "success");
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
      state.profile.id = action.payload._id;
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

export const useEditProfilePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: EditProfilePageSaga });
  return { actions: slice.actions };
};
