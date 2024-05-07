import { call, put, takeLatest } from "redux-saga/effects";
import { getUsersActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";
import api from "../../../../API/api";
import { user } from "./types";

function* handleGetUsers(action: PayloadAction<any>) {
  try {
    const res: user = yield call(api, {
      method: "GET",
      route: "/user/",
      query: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.getUsersSuccess(res));
    }
  } catch (error) {
    yield put(actions.getUsersFailed(error));
  }
}
export function* GetUsersListSaga() {
  yield takeLatest(actions.getUsers.type, handleGetUsers);
}
