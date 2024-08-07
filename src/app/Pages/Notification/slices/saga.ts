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
      query: action.payload,
    });
    if (res) {
      yield put(actions.fetchNotificationsSuccess(res));
    }
  } catch (error) {
    yield put(actions.fetchNotificationsFailed());
  }
}
function* handleMarkAsReadAllNotifications(action: PayloadAction<any>) {
  try {
    const res: AxiosResponse<any> = yield api({
      route: "/notification/",
      method: "PUT",
      isSecureRoute: true,
    });
    if (res) {
      yield put(actions.markAsReadAllNotificationsSuccess(res));
    }
  } catch (error) {
    yield put(actions.markAsReadAllNotificationsFailed());
  }
}

export function* NotificationPageSaga() {

  yield takeLatest(
    actions.markAsReadAllNotifications.type,
    handleMarkAsReadAllNotifications
  );
  
  yield takeLatest(actions.fetchNotifications.type, handleFetchNotifications);
}
