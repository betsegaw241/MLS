import { put, takeLatest } from "redux-saga/effects";
import { OrderPageActions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleFetchOrders(
  action: PayloadAction<any>
): Generator<any, void, AxiosResponse<any>> {
  try {
    const res: AxiosResponse<any> = yield api({
      route: "/order",
      method: "GET",
      isSecureRoute: true,
      query: {
        page: action.payload.page,
        limit: action.payload.limit,
        orderName: action.payload.orderName,
      },
    });
    if (res) {
      yield put(OrderPageActions.fetchOrdersSuccess(res)); // Assuming data is an array of orders
    }
  } catch (error) {
    console.log("error=======", error);
    yield put(OrderPageActions.fetchOrdersFailed());
  }
}

export function* OrderPageSaga() {
  yield takeLatest(OrderPageActions.fetchOrders.type, handleFetchOrders);
}
