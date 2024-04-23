import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  ITransaction, transactionDetailPageState } from "./types";
import { TransactionDetailPageSaga } from "./saga";
import { useInjectReducer, useInjectSaga } from "redux-injectors";

export const initialState: transactionDetailPageState = {
  isgettingTransaction: false,
  isTransactionExist: false,
  transaction: {} as ITransaction, 
};

const slice = createSlice({
  name: "transactionDetailSlice",
  initialState,
  reducers: {

    updateStatus: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        transaction: {
          ...state.transaction,
          status: action.payload.status,
        },
      };
    },

    fetchTransaction: (state, action: PayloadAction<any>) => {
      state.isgettingTransaction = true;
    },
    fetchTransactionSuccess: (state, action: PayloadAction<any>) => {
      state.isgettingTransaction = false;
      state.isTransactionExist = true;
      state.transaction = action.payload;
    },
    fetchTransactionFailed: (state) => {
      state.isgettingTransaction = false;
    },
  },
});

export const { actions: TransactionDetailPageActions } = slice;

export const useTransactionDetailPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: TransactionDetailPageSaga });
  return { actions: slice.actions };
};
