import { put, takeLatest } from "redux-saga/effects";
import { OrderDetailPageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleFetchOrder(
  action: PayloadAction<any>
): Generator<any, void, AxiosResponse<any>> {
  try {
    const res: AxiosResponse<any> = yield api({
      route: `/order/${action.payload}`,
      method: "GET",
      isSecureRoute: true,
      query: { id: action.payload },
    });
    
    
    if (res) {
      yield put(actions.fetchOrderSuccess(res)); // Assuming data is an array of orders
    }
  } catch (error) {
    console.log("error=======", error);
    yield put(actions.fetchOrderFailed());
  }
}

export function* OrderDetailPageSaga() {
  yield takeLatest(actions.fetchOrder.type, handleFetchOrder);
}
