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
      body: { id: action.payload.id },
      query: {
        page: action.payload.page,
        limit: action.payload.limit,
        drugName: action.payload.drugName,
        catagory: action.payload.catagory,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
      },
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
