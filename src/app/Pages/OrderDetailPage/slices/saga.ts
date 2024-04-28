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
function* handleReject(action: PayloadAction<any>) {
  try {
    const { orderId } = action.payload;

    const res: AxiosResponse = yield api({
      route: `/order/${orderId}/reject`,
      method: "PUT",
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.updateStatus(res.data)); // Assuming res.data contains the updated order
    }
  } catch (error) {
    console.error("Error updating order status:", error);
  }
}

function* handleAccept(action: PayloadAction<any>) {
  try {
    const { _id } = action.payload;

    const res: AxiosResponse = yield api({
      route: `/order/${_id}/accept`,
      method: "PUT",
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.updateStatus(res)); 
    }
  } catch (error) {
    console.error("Error updating order status:", error);

  }
}

export function* OrderDetailPageSaga() {
yield takeLatest(actions.fetchOrder.type, handleFetchOrder);
yield takeLatest(actions.updateStatus.type, handleReject);
yield takeLatest(actions.updateStatus.type, handleAccept);

}
