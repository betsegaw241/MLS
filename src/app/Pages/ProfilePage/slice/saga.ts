import { put, takeLatest } from "redux-saga/effects";
import { EditProfilePageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { PayloadType } from "./types";

function* handleEditProfile(action: PayloadAction<PayloadType>) {
  console.log(action.payload);

  try {
    const res: AxiosResponse = yield api({
      route: `/user/${action.payload.id}`,
      method: "PUT",
      isSecureRoute: true,
      body: action.payload,
    });

    if (res) {
      yield put(actions.editProfileSuccess(res));
    }
  } catch (error) {
    yield put(actions.editProfileFailed(error));
  }
}
function* handleGetUser(action: PayloadAction<string>) {
  try {
    const res: AxiosResponse = yield api({
      route: `/user/${action.payload}`,
      method: "GET",
      isSecureRoute: true,
    });
    if (res) {
      yield put(actions.getUserSuccess(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getUserFailed(error));
  }
}

function* handleChangePassword(action: PayloadAction<any>) {
  try {
    const res: AxiosResponse = yield api({
      route: `/user/${action.payload.id}`,
      method: "PUT",
      isSecureRoute: true,
      body: action.payload,
    });
    if (res) {
      yield put(actions.changePasswordSuccess(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.changePasswordFailed(error));
  }
}

export function* EditProfilePageSaga() {
  yield takeLatest(actions.editProfile.type, handleEditProfile);
  yield takeLatest(actions.getUser.type, handleGetUser);
  yield takeLatest(actions.changePassword.type, handleChangePassword);
}
