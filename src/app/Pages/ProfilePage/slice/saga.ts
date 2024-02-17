import { put, takeLatest } from "redux-saga/effects";
import { EditProfilePageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleEditProfile(action: PayloadAction<string>) {
  try {
    const res: AxiosResponse = yield api({
      route: "/user/edit",
      method: "POST",
      isSecureRoute: true,
      body: { user: action.payload },
    });
    if (res.status === 200) {
      yield put(actions.EditProfileSuccess(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.EditProfileFailed(error));
  }
}

export function* EditProfilePageSaga() {
  yield takeLatest(actions.editProfile.type, handleEditProfile);
}
