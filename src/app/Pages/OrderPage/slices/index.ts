import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { orderPageState, IOrder } from "./types";
import { OrderPageSaga } from "./saga";
import { useInjectReducer, useInjectSaga } from "redux-injectors";

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
    id: 0,
  },
  orders: [], // to store fetched orders
};

const slice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {

    fetchOrders: (state) => {
      state.isgettingOrder = true;
    },
    fetchOrdersSuccess: (state, action: PayloadAction<IOrder>) => {
      state.isgettingOrder = false;
      state.isOrderExist = true;
      state.order = action.payload; // Updating orders array with fetched orders
    },
    fetchOrdersFailed: (state) => {
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
