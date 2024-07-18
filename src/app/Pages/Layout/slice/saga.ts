import { call, put, takeLatest } from "redux-saga/effects";
// import { AxiosResponse } from 'axios';
import { defaultLayoutActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";

import api from "../../../../API/api";
import { IUserModel } from "../../../models/user";
import { FormValues } from "../../Login/types";
import { AxiosResponse } from "axios";

function* handleLogin(action: PayloadAction<FormValues>) {

  console.log(action);
  try {
    const res: IUserModel = yield call(api, {
      method: "POST",
      route: "/user/login",
      body: action.payload,
      isSecureRoute: true,
    });
   
    if (res.status === 200) { 
    
      localStorage.setItem("token", `${res.data.accessToken}`);
      localStorage.setItem("id", `${res.data._id}`);
      localStorage.setItem("email", `${res.data.email}`);
      localStorage.setItem("name", `${res.data.name}`);
      localStorage.setItem("role", `${res.data.role}`);
      yield put(actions.loginSuccess(res.data));
    }
  } catch (error) {
    yield put(actions.loginFailed(error as string));
  }
}

export function* DefaultLayoutSaga() {
  yield takeLatest(actions.login.type, handleLogin);
}
