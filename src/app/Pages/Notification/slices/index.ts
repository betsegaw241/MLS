import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notificationPageState } from "./types";
import { NotificationPageSaga } from "./saga";
import { useInjectReducer, useInjectSaga } from "redux-injectors";

export const initialState: notificationPageState = {
  isgettingNotification: false,
  isNotificationExist: false,
  notification: {
    userId: "",
    title: "Untitled",
    message: "No message",
    isRead: false,
    type: "info",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  notifications: [], 
};

const slice = createSlice({
  name: "notificationSlice",
  initialState,
  reducers: {

    fetchNotifications: (state ,action: PayloadAction<any>) => {
      state.isgettingNotification = true;
    },
    fetchNotificationsSuccess: (state, action: PayloadAction<any>) => {
      state.isgettingNotification = false;
      state.isNotificationExist = true;
      state.notification = action.payload; 
    },
    fetchNotificationsFailed: (state) => {
      state.isgettingNotification = false;
    },
  },
});

export const { actions: NotificationPageActions } = slice;

export const useNotificationPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: NotificationPageSaga });
  return { actions: slice.actions };
};
