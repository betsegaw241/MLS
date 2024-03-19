import { call, put, takeLatest } from "redux-saga/effects";
import { ManageInventoryActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";

import api from "../../../../API/api";
import { data } from "../../../models/user";

function* handleGetDrugs(action: PayloadAction<any>) {
  try {
    const res: data = yield call(api, {
      method: "GET",
      route: "/",
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.getDrugsSuccess(res));
    }
  } catch (error) {
    yield put(actions.getDrugsFailed(error));
  }
}

function* SoldOutDrugs(action: PayloadAction<any>) {
  try {
    const res: data = yield call(api, {
      method: "GET",
      route: "/",
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.getSoldOutDrugsSuccess(res));
    }
  } catch (error) {
    yield put(actions.getSoldOutDrugsFailed(error));
  }
}

export function* ManageInventorySaga() {
  yield takeLatest(actions.getDrugs.type, handleGetDrugs);
  yield takeLatest(actions.getSoldOutDrugs.type, SoldOutDrugs);
  yield takeLatest(actions.getSoonExpiringDrugs.type, handleGetDrugs);
  yield takeLatest(actions.getexpiredDrugs.type, handleGetDrugs);
  yield takeLatest(actions.getrecentlyaddedDrugs.type, handleGetDrugs);
  yield takeLatest(actions.getLowStockDrugs.type, handleGetDrugs);
}
