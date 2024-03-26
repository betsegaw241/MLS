import { call, put, takeLatest } from "redux-saga/effects";
import { addDrugActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";
import api from "../../../../API/api";
import { IDrug } from "./types";

function* handleAddDrugs(action: PayloadAction<any>) {
  try {
    const res: IDrug = yield call(api, {
      method: "POST",
      route: "/drug/stocks/6601c274a85570bc3a883161",
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.addDrugSuccess(res));
    }
  } catch (error) {
    yield put(actions.addDrugFailed(error));
  }
}
function* handleGetDrugs(action: PayloadAction<any>) {
  try {
    const res: IDrug = yield call(api, {
      method: "GET",
      route: "/",
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.getDrugSuccess(res));
    }
  } catch (error) {
    yield put(actions.getDrugFailed(error));
  }
}
export function* AddDrugSaga() {
  yield takeLatest(actions.addDrug.type, handleAddDrugs);
  yield takeLatest(actions.getDrug.type, handleGetDrugs);
}
