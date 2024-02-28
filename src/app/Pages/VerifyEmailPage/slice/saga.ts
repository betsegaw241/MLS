import { put, takeLatest } from "redux-saga/effects";
import { verifyAccountPageActions as actions } from "./index";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleVerifyAccount(action: PayloadAction<any>) {
  try {
    const res: AxiosResponse = yield api({
      route: "/user/activate-account",
      method: "POST",
      isSecureRoute: true,
      body: action.payload,
    });
    if (res) {
      yield put(actions.verifyAccountSuccess(res));
    }
  } catch (error) {
    yield put(actions.verifyAccountFailed(error));
  }
}

export function* VerifyAccountPageSaga() {
  yield takeLatest(actions.verifyAccount.type, handleVerifyAccount);
}
