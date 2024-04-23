import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { transactionPageState, Itransaction } from "./types";
import { TransactionPageSaga } from "./saga";
import { useInjectReducer, useInjectSaga } from "redux-injectors";

export const initialState: transactionPageState = {
  isgettingTransaction: false,
  isTransactionExist: false,
  transaction: {
    sender: {
      name: "",
      email: "",
    },
    receiver: {
      name: "",
      email: "",
    },
    senderAccount: {
      accountNumber: "",
      bankName: "",
      accountType: "",
    },
    receiverAccount: {
      accountNumber: "",
      bankName: "",
      accountType: "",
    },
    reason: "",
    length: 0,
    data: undefined,
    totalPages: 0,
    _id: "",
    createdAt: "",
  },
  transactions: [],
};

const slice = createSlice({
  name: "transactionSlice",
  initialState,
  reducers: {
    fetchTransactions: (state, action: PayloadAction<any>) => {
      state.isgettingTransaction = true;
    },
    fetchTransactionsSuccess: (state, action: PayloadAction<any>) => {
      state.isgettingTransaction = false;
      state.isTransactionExist = true;
      state.transaction = action.payload;
    },
    fetchTransactionsFailed: (state) => {
      state.isgettingTransaction = false;
    },
  },
});

export const { actions: TransactionPageActions } = slice;

export const useTransactionSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: TransactionPageSaga });
  return { actions: slice.actions };
};
