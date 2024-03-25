import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { orderPageState } from "./types";
import { OrderPageSaga } from "./saga";

export const initialState: orderPageState = {
  isgettingOrder: false,
  isOrderExist: false,
  order: {
      name: "",
      drug: "",
      phone: "",
      location: "",
      time: "",
      status: "",
      id: 0
  },
};
const slice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    orderSlice: (state, action: PayloadAction<any>) => {
      state.isgettingOrder = true;
    },

    getOrder: (state, action: PayloadAction<any>) => {
      state.isgettingOrder = true;
    },
    getOrderSuccess: (state, action: PayloadAction<any>) => {
      state.isgettingOrder = false;
      state.isOrderExist = true;
      state.order.id = action.payload.id;
      state.order.name = action.payload.name;
      state.order.phone = action.payload.phone;
      state.order.drug = action.payload.drug;
      state.order.location = action.payload.location;
      state.order.time = action.payload.time;
      state.order.status = action.payload.status;
    },
    getOrderFailed: (state, action: PayloadAction<any>) => {
      state.isgettingOrder = false;
    },
    
  },
});
export const { actions: OrderPageActions } = slice;

export const useOrderPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: OrderPageSaga });
  return { actions: slice.actions };
};
