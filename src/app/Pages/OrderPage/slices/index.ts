import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { orderPageState} from "./types";
import { OrderPageSaga } from "./saga";
import { useInjectReducer, useInjectSaga } from "redux-injectors";

export const initialState: orderPageState = {
  isgettingOrder: false,
  isOrderExist: false,
  order: {
    name: "",
    drugs: [],
    phone: "",
    location: "",
    time: "",
    status: "",
    id: 0,
    length: 0,
    data: undefined,
    totalPages: 0,
    pharmacyId: ""
  },
  orders: [], 
};

const slice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {

    fetchOrders: (state ,action: PayloadAction<any>) => {
      state.isgettingOrder = true;
    },
    fetchOrdersSuccess: (state, action: PayloadAction<any>) => {
      state.isgettingOrder = false;
      state.isOrderExist = true;
      state.order = action.payload; 
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
