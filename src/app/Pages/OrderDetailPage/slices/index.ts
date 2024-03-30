import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  IOrder, orderDetailPageState } from "./types";
import { OrderDetailPageSaga } from "./saga";
import { useInjectReducer, useInjectSaga } from "redux-injectors";

export const initialState: orderDetailPageState = {
  isgettingOrder: false,
  isOrderExist: false,
  order: {} as IOrder, //
};

const slice = createSlice({
  name: "orderDetailSlice",
  initialState,
  reducers: {
    // Other reducers...

    fetchOrder: (state, action: PayloadAction<string | undefined>) => {
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
