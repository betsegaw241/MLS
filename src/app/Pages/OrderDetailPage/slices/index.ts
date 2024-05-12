import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IOrder, orderDetailPageState } from "./types";
import { OrderDetailPageSaga } from "./saga";
import { useInjectReducer, useInjectSaga } from "redux-injectors";

export const initialState: orderDetailPageState = {
  isgettingOrder: false,
  isOrderExist: false,
  isUpdating: false,
  order: {} as IOrder,
};

const slice = createSlice({
  name: "orderDetailSlice",
  initialState,
  reducers: {
    // Other reducers...

    acceptOrder: (state, action: PayloadAction<any>) => {
      state.isUpdating = true;
    },
    acceptOrderSuccess: (state, action: PayloadAction<any>) => {
      state.isUpdating = false;
    },
    acceptOrderFailed: (state, action: PayloadAction<any>) => {
      state.isUpdating = false;
    },
    rejectOrder: (state, action: PayloadAction<any>) => {
      state.isUpdating = true;
    },
    rejectOrderSuccess: (state, action: PayloadAction<any>) => {
      state.isUpdating = false;
    },
    rejectOrderFailed: (state, action: PayloadAction<any>) => {
      state.isUpdating = false;
    },
    fetchOrder: (state, action: PayloadAction<any>) => {
      state.isgettingOrder = true;
    },
    fetchOrderSuccess: (state, action: PayloadAction<any>) => {
      state.isgettingOrder = false;
      state.isOrderExist = true;
      state.order = action.payload;
    },
    fetchOrderFailed: (state) => {
      state.isgettingOrder = false;
    },
  },
});

export const { actions: OrderDetailPageActions } = slice;

export const useOrderDetailPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: OrderDetailPageSaga });
  return { actions: slice.actions };
};
