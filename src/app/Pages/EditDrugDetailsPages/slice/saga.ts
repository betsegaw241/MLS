import { call, put, takeLatest } from "redux-saga/effects";
import { EditDrugActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";

import api from "../../../../API/api";
import { data } from "../../../models/user";

function* handleEditDrugs(action: PayloadAction<any>) {
  try {
    const res: data = yield call(api, {
      method: "PUT",
      route: `/drug/${action.payload.id}`,
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.editDrugSuccess(res));
    }
  } catch (error) {
    yield put(actions.editDrugFailed(error));
  }
}

export function* EditDrugDetailsSaga() {
  yield takeLatest(actions.editDrug.type, handleEditDrugs);
}
