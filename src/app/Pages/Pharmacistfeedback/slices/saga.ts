import { put, takeLatest } from "redux-saga/effects";
import { EditProfilePageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleFeedback(action: PayloadAction<any>) {
  console.log(action.payload);

  try {
    const res: AxiosResponse = yield api({
      route: `/user/${action.payload.id}`,
      method: "PUT",
      isSecureRoute: true,
      body: {
        avatar: action.payload.user.avatar,
        phone: action.payload.user.phone,
      },
    });

    if (res) {
      yield put(actions.feedbackSuccess(res));
    }
  } catch (error) {
    yield put(actions.feedbackFailed(error));
  }
}

export function* FeedbackPageSaga() {
  yield takeLatest(actions.feedback.type, handleFeedback);
}
