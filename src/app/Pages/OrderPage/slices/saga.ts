import { put, takeLatest } from "redux-saga/effects";
import { OrderPageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";


function* handleGetOrder(action: PayloadAction<string>) {
  try {
    const res: AxiosResponse = yield api({
      route: "/",
      method: "GET",
      isSecureRoute: true,
      query: { id: action.payload },
    });
    if (res) {
      yield put(actions.getOrderSuccess(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getOrderFailed(error));
  }
}

export function* OrderPageSaga() {
  yield takeLatest(actions.getOrder.type, handleGetOrder);
}
