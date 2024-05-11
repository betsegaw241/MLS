import { put, takeLatest } from "redux-saga/effects";
import { AddAdminPageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleAddAdmin(action: PayloadAction<any>) {
  try {
    const res: AxiosResponse = yield api({
      route: "/user/admin",
      method: "POST",
      isSecureRoute: true,
      body: action.payload ,
    });
    if (res) {
      yield put(actions.addAdminSuccess(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.addAdminFailed(error));
  }
}

export function* addAdminPageSaga() {
  yield takeLatest(actions.addAdmin.type, handleAddAdmin);
}
