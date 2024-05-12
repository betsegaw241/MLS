import { put, call, takeLatest } from "redux-saga/effects";
import { NotificationPageActions as actions } from ".";
import { AxiosResponse } from "axios";
import api from "../../../../API/api";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleFetchNotifications(action: PayloadAction<any>) {
  try {
    const res: AxiosResponse<any> = yield api({
      route: "/notification/",
      method: "GET",
      isSecureRoute: true,
      query:{page:1}
    });
    if (res) {
      yield put(actions.fetchNotificationsSuccess(res));
    }
  } catch (error) {
    console.log("error======", error);
    yield put(actions.fetchNotificationsFailed());
  }
}

export function* NotificationPageSaga() {
  yield takeLatest(
    actions.fetchNotifications.type,
    handleFetchNotifications
  );
  
}
