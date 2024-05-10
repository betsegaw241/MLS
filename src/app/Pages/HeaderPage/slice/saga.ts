import { call, put, takeLatest } from "redux-saga/effects";
import { createFeedbacksActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";
import api from "../../../../API/api";
import { Feedback } from "./types";

function* handleCreateFeedbacks(action: PayloadAction<any>) {
  try {
    const res: Feedback = yield call(api, {
      method: "POST",
      route: "/feedback/",
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.createFeedbacksSuccess(res));
    }
  } catch (error) {
    yield put(actions.createFeedbacksFailed(error));
  }
}
export function* CreateFeedbacksListSaga() {
  yield takeLatest(actions.createFeedbacks.type, handleCreateFeedbacks);

}
