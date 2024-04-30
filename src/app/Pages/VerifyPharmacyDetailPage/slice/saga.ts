import { call, put, takeLatest } from "redux-saga/effects";
import { VerifyPharmacyActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";
import api from "../../../../API/api";
import { pharmacy } from "./types";

function* handleGetPharmacy(action: PayloadAction<any>) {
  try {
    const res: pharmacy = yield call(api, {
      method: "GET",
      route: `/pharmacy/${action.payload}`,
      query: { page: action.payload.page },
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.getpharmacySuccess(res));
    }
  } catch (error) {
    yield put(actions.getpharmacyFailed(error));
  }
}

function* handleVerifyPharmacy(action: PayloadAction<any>) {
  try {
    const res: pharmacy = yield call(api, {
      method: "PUT",
      route: `/pharmacy/admin/${action.payload.id}`,
      isSecureRoute: true,
      body: { status: action.payload.status },
    });

    if (res) {
      yield put(actions.verifyPharmacySuccess(res));
    }
  } catch (error) {
    yield put(actions.verifyPharmacyFailed(error));
  }
}

export function* VerifyPharmacySaga() {
  yield takeLatest(actions.getpharmacy.type, handleGetPharmacy);
  yield takeLatest(actions.verifyPharmacy.type, handleVerifyPharmacy);
}
