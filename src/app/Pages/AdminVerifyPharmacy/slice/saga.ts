import { call, put, takeLatest } from "redux-saga/effects";
import { VerifyPharmaciesActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";
import api from "../../../../API/api";
import { pharmacy } from "./types";

function* handleGetPharmacies(action: PayloadAction<any>) {
  try {
    const res: pharmacy = yield call(api, {
      method: "GET",
      route: "/pharmacy",
      query: { page: action.payload.page },
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.getpharmaciesSuccess(res));
    }
  } catch (error) {
    yield put(actions.getpharmaciesFailed(error));
  }
}
export function* VerifyPharmaciesListSaga() {
  yield takeLatest(actions.getpharmacies.type, handleGetPharmacies);
}
