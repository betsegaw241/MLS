import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { feedbackPageState } from "./types";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { FeedbackPageSaga } from "./saga";

export const initialState: feedbackPageState = {
  errorMessage: "",
  feedback: {
    title: "",
    message: "",
  },
};
const slice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    feedback: (state, action: PayloadAction<any>) => {},
    feedbackSuccess: (state, action: PayloadAction<any>) => {
      state.isEditing = false;
      state.profile.avatar = action.payload.avatar;
      state.profile.phone = action.payload.phone;
    },
    feedbackFailed: (state, action: PayloadAction<any>) => {
      state.isEditing = false;
      state.errorMessage = action.payload;
    },
  },
});
export const { actions: EditProfilePageActions } = slice;

export const useEditProfilePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: feedbackPageSaga });
  return { actions: slice.actions };
};
