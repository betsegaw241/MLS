import { put, takeLatest } from "redux-saga/effects";
import { NotificationPageActions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleFetchNotifications(
  action: PayloadAction<any>
): Generator<any, void, AxiosResponse<any>> {
  try {
    const res: AxiosResponse<any> = yield api({
      route: "/notification",
      method: "GET",
      isSecureRoute: true,
      query: {
        page: action.payload,
        
      },
    });
    if (res) {
      yield put(NotificationPageActions.fetchNotificationsSuccess(res)); 
    }
  } catch (error) {
    console.log("error=======", error);
    yield put(NotificationPageActions.fetchNotificationsFailed());
  }
}

export function* NotificationPageSaga() {
  yield takeLatest(NotificationPageActions.fetchNotifications.type, handleFetchNotifications);
}
