import { call, put, takeLatest } from "redux-saga/effects";
import { addDrugActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";
import api from "../../../../API/api";
import { IDrug } from "./types";

function* handleAddDrugs(action: PayloadAction<any>) {
  try {
    const res: IDrug = yield call(api, {
      method: "POST",
      route: `/drug/stocks/${action.payload.drug}`,
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
      route: `/drug/names/${action.payload}`,
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
