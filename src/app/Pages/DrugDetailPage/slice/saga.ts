import { call, put, takeLatest } from "redux-saga/effects";
import { getDrugDetailActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";
import api from "../../../../API/api";
import { IDrug } from "./types";

function* handleGetDrugs(action: PayloadAction<any>) {
  try {
    const res: IDrug = yield call(api, {
      method: "GET",
      route: `/drug/${action.payload}`,
      isSecureRoute: true,
    });
    console.log(res);

    if (res) {
      yield put(actions.getDrugDetailSuccess(res));
    }
  } catch (error) {
    yield put(actions.getDrugDetailFailed(error));
  }
}

function* handleGetDrugStock(action: PayloadAction<any>) {
  try {
    const res: IDrug = yield call(api, {
      method: "GET",
      route: `/drug/stocks/${action.payload.id}`,
      isSecureRoute: true,
      query: { page: action.payload.page, limit: action.payload.limit },
    });
    console.log(res);

    if (res) {
      yield put(actions.getDrugStockSuccess(res));
    }
  } catch (error) {
    yield put(actions.getDrugStockFailed(error));
  }
}
export function* GetDrugDetailSaga() {
  yield takeLatest(actions.getDrugDetail.type, handleGetDrugs);
  yield takeLatest(actions.getDrugStock.type, handleGetDrugStock);
}
