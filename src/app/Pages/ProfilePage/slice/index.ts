import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { editProfilePageState } from "./types";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { EditProfilePageSaga } from "./saga";

export const initialState: editProfilePageState = {
  isAuthenticated: false,
  isCreating: false,
  errorMessage: "",
  isEditing: false,
  isgettingUser: false,
  isUserExist: false,
  profile: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    avatar: "",
  },
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
      const nameParts = action.payload.name.split(" ");
      console.log(nameParts);
      state.profile.firstName = nameParts[0];
      state.profile.avatar = action.payload.avatar;
      state.profile.lastName = nameParts[1];
      state.profile.email = action.payload.email;
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
      state.profile.avatar = action.payload.avatar;
      state.profile.lastName = nameParts[1];
      state.profile.email = action.payload.email;
      state.profile.phone = action.payload.phoneNumber;
    },
    getUserFailed: (state, action: PayloadAction<any>) => {
      state.isgettingUser = false;
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
