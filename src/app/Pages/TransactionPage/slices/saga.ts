import { put, takeLatest } from "redux-saga/effects";
import { TransactionPageActions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleFetchTransactions(
  action: PayloadAction<any>
): Generator<any, void, AxiosResponse<any>> {
  try {
    const res: AxiosResponse<any> = yield api({
      route: "/transaction",
      method: "GET",
      isSecureRoute: true,
      query: action.payload,
    });
    if (res) {
      yield put(TransactionPageActions.fetchTransactionsSuccess(res));
    }
  } catch (error) {
    console.log("error=======", error);
    yield put(TransactionPageActions.fetchTransactionsFailed());
  }
}

export function* TransactionPageSaga() {
  yield takeLatest(
    TransactionPageActions.fetchTransactions.type,
    handleFetchTransactions
  );
}
