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
      yield put(actions.fetchOrderSuccess(res)); 
    }
  } catch (error) {
    console.log("error=======", error);
    yield put(actions.fetchOrderFailed());
  }
}

function* handleReject(action: PayloadAction<any>) {
  try {
    const res: AxiosResponse<any> = yield api({
      route: `/order/${action.payload}/reject`,
      method: "PUT",
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.rejectOrderSuccess(res));
    }
  } catch (error) {
    yield put(actions.rejectOrderFailed(error));

    console.error("Error updating order status:", error);
  }
}

function* handleAccept(action: PayloadAction<any>) {
  try {
    const res: AxiosResponse = yield api({
      route: `/order/${action.payload}/accept`,
      method: "PUT",
      isSecureRoute: true,
      query: {
        pharmacyId: action.payload.pharmacyId,
      },
    });

    if (res) {
      yield put(actions.acceptOrderSuccess(res));
    }
  } catch (error) {
    console.error("Error updating order status:", error);
    yield put(actions.acceptOrderFailed(error));
  }
}

export function* OrderDetailPageSaga() {
  yield takeLatest(actions.fetchOrder.type, handleFetchOrder);
  yield takeLatest(actions.rejectOrder.type, handleReject);
  yield takeLatest(actions.acceptOrder.type, handleAccept);
}
