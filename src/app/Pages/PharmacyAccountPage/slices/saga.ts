import { put, takeLatest } from "redux-saga/effects";
import { pharmacyAccountPageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleGetPharmacyDetail(action: PayloadAction<string>) {
  try {
    const res: AxiosResponse = yield api({
      route: `/pharmacy/pharmacist/my-pharmacy`,
      method: "GET",
      isSecureRoute: true,
      query: { id: action.payload },
    });
    if (res) {
      yield put(actions.getpharmacyDetailSuccess(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getpharmacyDetailFailed(error));
  }
}
function* handleUpdatePharmacyDetail(action: PayloadAction<string>) {
  try {
    const res: AxiosResponse = yield api({
      route: `/pharmacy/${action.payload}`,
      method: "GET",
      isSecureRoute: true,
      query: { id: action.payload },
    });
    if (res) {
      yield put(actions.updatepharmacyDetailSuccess(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.updatepharmacyDetailFailed(error));
  }
}

export function* OrderPageSaga() {
  yield takeLatest(actions.getpharmacyDetail.type, handleGetPharmacyDetail);
  yield takeLatest(
    actions.updatepharmacyDetail.type,
    handleUpdatePharmacyDetail
  );
}
