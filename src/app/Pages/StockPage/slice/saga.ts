import { call, put, takeLatest } from "redux-saga/effects";
import { getDrugsActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";
import api from "../../../../API/api";
import { IDrug } from "./types";

function* handleGetDrugs(action: PayloadAction<any>) {
  try {
    const res: IDrug = yield call(api, {
      method: "GET",
      route: "/drug",
      query: action.payload,
      isSecureRoute: true,
    });
    console.log(res);

    if (res) {
      yield put(actions.getDrugsSuccess(res));
    }
  } catch (error) {
    yield put(actions.getDrugsFailed(error));
  }
}
export function* GetDrugsListSaga() {
  yield takeLatest(actions.getDrugs.type, handleGetDrugs);
}
