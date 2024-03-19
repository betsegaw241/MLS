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
  name: "addDrug",
  initialState,
  reducers: {
    addDrug: (state) => {
      state.loading = true;
    },
    addDrugSuccess: (state, action: PayloadAction<data>) => {
      state.loading = false;
      // state.user = action.payload;
    },
    addDrugFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { actions: addDrugActions } = slice;

export const UseAddDrugSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: AddDrugSaga });
  return { actions: slice.actions };
};
