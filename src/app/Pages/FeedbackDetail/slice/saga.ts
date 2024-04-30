import { call, put, takeLatest } from "redux-saga/effects";
import { getFeedbacksActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";
import api from "../../../../API/api";
import { Feedback } from "./types";

function* handleGetFeedbackDetail(action: PayloadAction<any>) {
  try {
    const res: Feedback = yield call(api, {
      method: "GET",
      route: `/feedback/${action.payload}`,
      // query: { page: action.payload.page, role: action.payload.role },
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.getFeedbackSuccess(res));
    }
  } catch (error) {
    yield put(actions.getFeedbackFailed(error));
  }
}
function* handleDeleteFeedbacks(action: PayloadAction<any>) {
  try {
    const res: Feedback = yield call(api, {
      method: "DELETE",
      route: `/feedback/${action.payload}`,
      query: { page: action.payload.page, role: action.payload.role },
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.deleteFeedbacksSuccess(res));
    }
  } catch (error) {
    yield put(actions.deleteFeedbacksFailed(error));
  }
}
export function* GetFeedbackListSaga() {
  yield takeLatest(actions.getFeedback.type, handleGetFeedbackDetail);
  yield takeLatest(actions.deleteFeedbacks.type, handleDeleteFeedbacks);
}
