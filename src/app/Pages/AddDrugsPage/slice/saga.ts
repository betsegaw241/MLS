import { call, put, takeLatest } from "redux-saga/effects";
import { addDrugActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";

import api from "../../../../API/api";
import { data } from "../../../models/user";

function* handleAddDrugs(action: PayloadAction<any>) {
  try {
    const res: data = yield call(api, {
      method: "POST",
      route: "/",
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

export function* AddDrugSaga() {
  yield takeLatest(actions.addDrug.type, handleAddDrugs);
}
