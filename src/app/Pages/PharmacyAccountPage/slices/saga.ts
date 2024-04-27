import { put, takeLatest } from "redux-saga/effects";
import { pharmacyAccountPageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleGetPharmacyDetail(action: PayloadAction<string>) {
  try {
    const res: AxiosResponse = yield api({
      route: `/pharmacy/${action.payload}`,
      method: "GET",
      isSecureRoute: true,
    });
    if (res) {
      yield put(actions.getpharmacyDetailSuccess(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getpharmacyDetailFailed(error));
  }
}
function* handleUpdatePharmacyDetail(action: PayloadAction<any>) {
  try {
    const res: AxiosResponse = yield api({
      route: `/pharmacy/${action.payload._id}`,
      method: "PUT",
      isSecureRoute: true,
      body: action.payload,
    });
    if (res) {
      yield put(actions.updatepharmacyDetailSuccess(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.updatepharmacyDetailFailed(error));
  }
}
function* handleFileUpload(action: PayloadAction<any>) {
  try {
    const res: AxiosResponse = yield api({
      route: `/file/upload`,
      method: "POST",
      isSecureRoute: true,
      body: action.payload,
    });
    if (res) {
      yield put(actions.uploadFilelSuccess(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.uploadFileFailed(error));
  }
}

function* handleGetBanks(action: PayloadAction<string>) {
  try {
    const res: AxiosResponse = yield api({
      route: `/transaction/chapa/banks`,
      method: "GET",
      isSecureRoute: true,
    });
    if (res) {
      yield put(actions.getBanksSuccess(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getBanksFailed(error));
  }
}
export function* OrderPageSaga() {
  yield takeLatest(actions.getpharmacyDetail.type, handleGetPharmacyDetail);
  yield takeLatest(actions.getBanks.type, handleGetBanks);
  yield takeLatest(actions.uploadFile.type, handleFileUpload);
  yield takeLatest(
    actions.updatepharmacyDetail.type,
    handleUpdatePharmacyDetail
  );
}
