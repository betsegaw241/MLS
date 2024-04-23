import { put, takeLatest } from "redux-saga/effects";
import { TransactionDetailPageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleFetchTransaction(
  action: PayloadAction<any>
): Generator<any, void, AxiosResponse<any>> {
  try {
    const res: AxiosResponse<any> = yield api({
      route: `/transaction/${action.payload}`,
      method: "GET",
      isSecureRoute: true,
      query: { id: action.payload },
    });
     
    if (res) {
      yield put(actions.fetchTransactionSuccess(res)); 
  }
} catch (error) {
    console.log("error=======", error);
    yield put(actions.fetchTransactionFailed());
  }
}
// function* handleReject (action: PayloadAction<any>) {
//   try {
//     const res: AxiosResponse = yield api({
//       route: `/transactions/${action.payload.id}`,
//       method: "PUT",
//       isSecureRoute: true,
//       body: {
//         status: "REJECTED", 
//       },
//     });

//     if (res && res.data) {
//       yield put(actions.updateStatus(res.data)); 
//     }
//   } catch (error) {
//     console.error("Error updating transaction status:", error);
//   }
// }


export function* TransactionDetailPageSaga() {
  yield takeLatest(actions.fetchTransaction.type, handleFetchTransaction);
  //yield takeLatest(actions.updateStatus.type, handleReject);

}
