import { put, takeLatest } from "redux-saga/effects";
import { CreateAccountPageActions as actions } from "./index";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleCreateAccount(action: PayloadAction<any>) {
  try {
    const res: AxiosResponse = yield api({
      route: "/user/pharmacist",
      method: "POST",
      isSecureRoute: true,
      body: action.payload,
    });
    if (res) {
      yield put(actions.createAccountSuccess(res));
    }
  } catch (error) {
    yield put(actions.createAccountFailed(error));
  }
}

export function* CreateAccountPageSaga() {
  yield takeLatest(actions.createAccount.type, handleCreateAccount);
}
