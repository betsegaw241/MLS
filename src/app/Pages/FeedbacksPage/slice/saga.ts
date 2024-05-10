import { call, put, takeLatest } from "redux-saga/effects";
import { getFeedbacksActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";
import api from "../../../../API/api";
import { Feedback } from "./types";

function* handleGetFeedbacks(action: PayloadAction<any>) {
  try {
    const res: Feedback = yield call(api, {
      method: "GET",
      route: "/feedback/",
      query: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.getFeedbacksSuccess(res));
    }
  } catch (error) {
    yield put(actions.getFeedbacksFailed(error));
  }
}
function* handleDeleteFeedbacks(action: PayloadAction<any>) {
  try {
    const res: Feedback = yield call(api, {
      method: "GET",
      route: "/user/",
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
function* handleCreateFeedbacks(action: PayloadAction<any>) {
  try {
    const res: Feedback = yield call(api, {
      method: "PUT",
      route: "/feedback/",
      body: action.payload,
      // {
      //   page: action.payload.page,
      //   role: action.payload.role,
      //   title: action.payload.title,
      //   content: action.payload.content,
      // },
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.createFeedbacksSuccess(res));
    }
  } catch (error) {
    yield put(actions.createFeedbacksFailed(error));
  }
}
export function* GetFeedbacksListSaga() {
  yield takeLatest(actions.getFeedbacks.type, handleGetFeedbacks);
  yield takeLatest(actions.deleteFeedbacks.type, handleDeleteFeedbacks);
  yield takeLatest(actions.createFeedbacks.type, handleCreateFeedbacks);

}
