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

      yield put(actions.loginSuccess(res));
    }
  } catch (error) {
    yield put(actions.loginFailed(error));
  }
}

function* handleSendOtp(action: PayloadAction<FormValues>) {
  try {
    const res: IUser = yield call(api, {
      method: "POST",
      route: "/user/send-otp",
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
     
      yield put(actions.sendOtpSuccess(res));
    }
  } catch (error) {
    yield put(actions.sendOtpFailed(error));
  }
}
function* handleVerifyOtp(action: PayloadAction<FormValues>) {
  try {
    const res: IUser = yield call(api, {
      method: "POST",
      route: "/user/verify-otp",
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
     
      yield put(actions.verifyOtpSuccess(res));
    }
  } catch (error) {
    yield put(actions.verifyOtpFailed(error));
  }
}
function* handleChangePassword(action: PayloadAction<FormValues>) {
  try {
    const res: IUser = yield call(api, {
      method: "POST",
      route: "/user/reset-password",
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
     
      yield put(actions.changePasswordSuccess(res));
    }
  } catch (error) {
    yield put(actions.changePasswordFailed(error));
  }
}
export function* LoginSaga() {
  yield takeLatest(actions.login.type, handleLogin);
  yield takeLatest(actions.sendOtp.type, handleSendOtp);
  yield takeLatest(actions.verifyOtp.type, handleVerifyOtp);
  yield takeLatest(actions.changePassword.type, handleChangePassword);
}
