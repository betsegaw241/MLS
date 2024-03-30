import { call, put, takeLatest } from "redux-saga/effects";
import { DashboardActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";

import api from "../../../../API/api";
import { IUserModel } from "../../../models/user";
import { FormValues } from "../../Login/types";

function* handleGetPharmacy(action: PayloadAction<FormValues>) {
  console.log(action);
  try {
    const res: IUserModel = yield call(api, {
      method: "GET",
      route: `/pharmacy/${action.payload}`,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.GetPharmacySuccess(res));
    }
  } catch (error) {
    yield put(actions.GetPharmacyFailed(error));
  }
}

export function* DashboardSaga() {
  yield takeLatest(actions.GetPharmacy.type, handleGetPharmacy);
}
