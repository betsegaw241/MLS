import { call, put, takeLatest } from "redux-saga/effects";
import { addDrugActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";

import api from "../../../../API/api";
import { data } from "../../../models/user";

function* handleRegisterDrugs(action: PayloadAction<any>) {
  try {
    const res: data = yield call(api, {
      method: "POST",
      route: `/drug/${action.payload.id}`,
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.registerDrugSuccess(res));
    }
  } catch (error) {
    yield put(actions.registerDrugFailed(error));
  }
}

export function* RegistrDrugSaga() {
  yield takeLatest(actions.registerDrug.type, handleRegisterDrugs);
}
