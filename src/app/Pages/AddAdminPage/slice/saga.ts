import { put, takeLatest } from "redux-saga/effects";
import { AddAdminPageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleAddAdmin(action: PayloadAction<string>) {
  try {
    const res: AxiosResponse = yield api({
      route: "/admin/add",
      method: "POST",
      isSecureRoute: true,
      body: { user: action.payload },
    });
    if (res.status === 200) {
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
