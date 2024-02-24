import { put, takeLatest } from "redux-saga/effects";
import { HomePageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleGetPharmacies(action: PayloadAction<string>) {
  try {
    const res: AxiosResponse = yield api({
      route: "/pharmacist/add",
      method: "POST",
      isSecureRoute: true,
      body: { user: action.payload },
    });
    if (res.status === 200) {
      yield put(actions.getPharmaciesSuccess(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.getPharmaciesFailed(error));
  }
}

export function* addPharmacyPageSaga() {
  yield takeLatest(actions.getPharmacies.type, handleGetPharmacies);
}
