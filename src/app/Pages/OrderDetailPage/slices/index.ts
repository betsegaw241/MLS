import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  IOrder, orderDetailPageState } from "./types";
import { OrderDetailPageSaga } from "./saga";
import { useInjectReducer, useInjectSaga } from "redux-injectors";

export const initialState: orderDetailPageState = {
  isgettingOrder: false,
  isOrderExist: false,
  isUpdating: false,
  order: []
};

const slice = createSlice({
  name: "orderDetailSlice",
  initialState,
  reducers: {
    // Other reducers...

    updateStatus: (state, action: PayloadAction<any>) => {
      state.isUpdating = true;
    },
    updateStatusSuccess: (
      state,
      action: PayloadAction<{ orderId: string; status: string }>
    ) => {
      state.isUpdating = false;
const orderIndex = state.order.findIndex(
  (order) => order._id === action.payload.orderId
);
if (orderIndex !== -1) {
  state.order[orderIndex].status = action.payload.status;
}    },
    updateStatusFailed: (state, action: PayloadAction<any>) => {
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
