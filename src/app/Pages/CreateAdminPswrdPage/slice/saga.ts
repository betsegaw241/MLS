import { put, takeLatest } from "redux-saga/effects";
import { CreateAdminPwdPageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleCreateAdminPassword(action: PayloadAction<any>) {
  try {
    const res: AxiosResponse = yield api({
      route: "/user/admin/set-password",
      method: "PUT",
      isSecureRoute: true,
      body: action.payload,
      
    });
    if (res) {
      yield put(actions.createAdminPwdSuccess(res)); console.log(res);
    }
  } catch (error) {
   
    yield put(actions.createAdminPwdFailed(error));
  }
}

export function* createAdminPwdPageSaga() {
  yield takeLatest(actions.createAdminPwd.type, handleCreateAdminPassword);
}



