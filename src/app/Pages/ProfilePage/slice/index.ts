import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {editProfilePageState} from './types'
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { EditProfilePageSaga } from './saga';

export const initialState: editProfilePageState = {
  isEditing: false,
  errorMessage: "",
  profile: undefined,
  isAuthenticated: undefined,
  isCreating: undefined
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
      state.profile = action.payload;
      
    },
    editProfileFailed: (state, action: PayloadAction<any>) => {
      state.isEditing = false;
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

