import { put, takeLatest } from "redux-saga/effects";
import { AddPharmacyPageActions as actions } from ".";
import api from "../../../../API/api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleAddPharmacy(action: PayloadAction<string>) {
  try {
    const res: AxiosResponse = yield api({
      route: "/pharmacy/add",
      method: "POST",
      isSecureRoute: true,
      body: { user: action.payload },
    });
    if (res.status === 200) {
      yield put(actions.addPharmacySuccess(res));
    }
  } catch (error) {
    console.log(error);
    yield put(actions.addPharmacyFailed(error));
  }
}

export function* addPharmacyPageSaga() {
  yield takeLatest(actions.addPharmacy.type, handleAddPharmacy);
}
