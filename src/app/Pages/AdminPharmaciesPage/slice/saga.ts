import { call, put, takeLatest } from "redux-saga/effects";
import { getPharmaciesActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";
import api from "../../../../API/api";
import { pharmacy } from "./types";

function* handleGetPharmacies(action: PayloadAction<any>) {
  try {
    const res: pharmacy = yield call(api, {
      method: "GET",
      route: "/pharmacy",
      query: { page: action.payload.page, status: action.payload.status },
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.getpharmaciesSuccess(res));
    }
  } catch (error) {
    yield put(actions.getpharmaciesFailed(error));
  }
}

function* handleAssignPharmacies(action: PayloadAction<any>) {
  try {
    const res: pharmacy = yield call(api, {
      method: "PUT",
      route: `/pharmacy/assign/${action.payload.admin}`,
      body: { numberofPharmacies: action.payload.quantity },
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.assignpharmaciesSuccess(res));
    }
  } catch (error) {
    yield put(actions.assignpharmaciesFailed(error));
  }
}
export function* GetPharmaciesListSaga() {
  yield takeLatest(actions.getpharmacies.type, handleGetPharmacies);
  yield takeLatest(actions.assignpharmacies.type, handleAssignPharmacies);
}
