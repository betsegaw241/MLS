import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { data } from "../../../models/user";
import { AddDrugState } from "../types";
import { AddDrugSaga } from "./saga";

export const initialState: AddDrugState = {
  errorMessage: "",
  loading: false,
};

const slice = createSlice({
  name: "registerDrug",
  initialState,
  reducers: {
    registerDrug: (state) => {
      state.loading = true;
    },
    registerDrugSuccess: (state, action: PayloadAction<data>) => {
      state.loading = false;
      // state.user = action.payload;
    },
    registerDrugFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { actions: addDrugActions } = slice;

export const UseRegisterDrugSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: AddDrugSaga });
  return { actions: slice.actions };
};
