import { call, put, takeLatest } from "redux-saga/effects";
import { loginActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";

import api from "../../../../API/api";
import { IUser, data } from "../../../models/user";
import { FormValues } from "../types";

function* handleLogin(action: PayloadAction<FormValues>) {
  try {
    const res: IUser = yield call(api, {
      method: "POST",
      route: "/user/login",
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      localStorage.setItem("token", `${res.accessToken}`);
      localStorage.setItem("id", `${res._id}`);
      localStorage.setItem("avatar", `${res.avatar}`);
      localStorage.setItem("email", `${res.email}`);
      localStorage.setItem("name", `${res.name}`);
      localStorage.setItem("role", `${res.role}`);
      yield put(actions.loginSuccess(res));
    }
  } catch (error) {
    yield put(actions.loginFailed(error));
  }
}

export function* LoginSaga() {
  yield takeLatest(actions.login.type, handleLogin);
}
