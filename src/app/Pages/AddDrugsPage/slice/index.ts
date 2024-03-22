import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { AddDrugSaga } from "./saga";
import { IDrug, addDrugPageState } from "./types";

export const initialState: addDrugPageState = {
  errorMessage: "",
  loading: false,
  drug: [],
};

const slice = createSlice({
  name: "addDrug",
  initialState,
  reducers: {
    addDrug: (state, action: PayloadAction<IDrug>) => {
      state.loading = true;
    },
    addDrugSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
    },
    addDrugFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    getDrug: (state) => {
      state.loading = true;
    },
    getDrugSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.drug = action.payload;
    },
    getDrugFailed: (state, action: PayloadAction<any>) => {
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
