import { put, takeLatest } from "redux-saga/effects";
import { ReviewPageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleFetchReviews(
  action: PayloadAction<any>
): Generator<any, void, AxiosResponse<any>> {
  try {
    const res: AxiosResponse<any> = yield api({
      route: "/review/",
      method: "GET",
      isSecureRoute: true,
      query: action.payload,
    });
    if (res) {
      yield put(actions.fetchReviewsSuccess(res)); // Assuming data is an array of orders
    }
  } catch (error) {
    yield put(actions.fetchReviewsFailed(error));
  }
}

export function* ReviewPageSaga() {
  yield takeLatest(actions.fetchReviews.type, handleFetchReviews);
}
