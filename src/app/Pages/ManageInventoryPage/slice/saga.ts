import { call, put, takeLatest } from "redux-saga/effects";
import { ManageInventoryActions as actions } from ".";
import { PayloadAction } from "@reduxjs/toolkit";

import api from "../../../../API/api";
import { data } from "../../../models/user";
import { Drugs } from "./types";

function* handleGetDrugs(action: PayloadAction<any>) {
  try {
    const res: data = yield call(api, {
      method: "GET",
      route: "/drug",
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.getDrugsSuccess(res));
    }
  } catch (error) {
    yield put(actions.getDrugsFailed(error));
  }
}

function* SoldOutDrugs(action: PayloadAction<any>) {
  try {
    const res: data = yield call(api, {
      method: "GET",
      route: "/",
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.getSoldOutDrugsSuccess(res));
    }
  } catch (error) {
    yield put(actions.getSoldOutDrugsFailed(error));
  }
}
function* soonExpiringDrugs(action: PayloadAction<any>) {
  try {
    const res: data = yield call(api, {
      method: "GET",
      route: "/drug",
      body: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.getSoonExpiringDrugsSuccess(res));
    }
  } catch (error) {
    yield put(actions.getSoonExpiringDrugsFailed(error));
  }
}

function* getexpiredDrugs(action: PayloadAction<any>) {
   try {
    const res: data = yield call(api, {
      method: "GET",
      route: `/drug/stocks/${action.payload.id}`,
      query: action.payload,
      isSecureRoute: true,
    });

    if (res) {
      yield put(actions.getexpiredDrugsSuccess(res));
    }
  } catch (error) {
    yield put(actions.getexpiredDrugsFailed(error));
  }
}

function* getrecentlyaddedDrugs(action: PayloadAction<any>) {
  try {
    const res: data = yield call(api, {
      method: "GET",
      route: "/drug",
      body: action.payload,
      isSecureRoute: true,
      query: action.payload,
    });

    if (res) {
      yield put(actions.getrecentlyaddedDrugsSuccess(res));
    }
  } catch (error) {
    yield put(actions.getrecentlyaddedDrugsFailed(error));
  }
}
function* getLowStockDrugs(action: PayloadAction<any>) {
  try {
    const res: data = yield call(api, {
      method: "GET",
      route: "/drug",
      body: action.payload,
      isSecureRoute: true,
      query: action.payload,
    });

    if (res) {
      yield put(actions.getLowStockDrugsSuccess(res));
    }
  } catch (error) {
    yield put(actions.getLowStockDrugsFailed(error));
  }
}

export function* ManageInventorySaga() {
  yield takeLatest(actions.getDrugs.type, handleGetDrugs);
  yield takeLatest(actions.getSoldOutDrugs.type, SoldOutDrugs);
  yield takeLatest(actions.getSoonExpiringDrugs.type, soonExpiringDrugs);
  yield takeLatest(actions.getexpiredDrugs.type, getexpiredDrugs);
  yield takeLatest(actions.getrecentlyaddedDrugs.type, getrecentlyaddedDrugs);
  yield takeLatest(actions.getLowStockDrugs.type, getLowStockDrugs);
}
