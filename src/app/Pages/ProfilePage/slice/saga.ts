import { put, takeLatest } from "redux-saga/effects";
import { EditProfilePageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { PayloadType } from "./types";

function* handleEditProfile(action: PayloadAction<string>) {
  console.log(action);

  try {
    const res: AxiosResponse = yield api({
      route: `/user/${(action.payload as unknown as PayloadType).id}`,
      method: "PUT",
      isSecureRoute: true,
      body: { user: (action.payload as unknown as PayloadType).user },
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
      route: "/user/:userId",
      method: "GET",
      isSecureRoute: true,
      query: { id: action.payload },
    });
    if (res) {
      yield put(actions.getUserSuccess(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getUserFailed(error));
  }
}
export function* EditProfilePageSaga() {
  yield takeLatest(actions.editProfile.type, handleEditProfile);
  yield takeLatest(actions.getUser.type, handleGetUser);
}
