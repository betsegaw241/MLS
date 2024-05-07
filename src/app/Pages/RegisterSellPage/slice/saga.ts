import { call, put, takeLatest } from "redux-saga/effects";
import { registerSellActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";
import api from "../../../../API/api";
import { IDrug } from "./types";

function* handleRegisterSell(action: PayloadAction<any>) {
  try {
    const res: IDrug = yield call(api, {
      method: "POST",
      route: `/drug/stocks/${action.payload.drug}`,
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.resgsterSellSuccess(res));
    }
  } catch (error) {
    yield put(actions.resgsterSellFailed(error));
  }
}

export function* RegisterSellSaga() {
  yield takeLatest(actions.resgsterSellFailed.type, handleRegisterSell);
}
