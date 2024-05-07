import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { Drug, RegisterDrugPageState } from "../types";
import { RegistrDrugSaga } from "./saga";
import showToast from "utils/toast";

export const initialState: RegisterDrugPageState = {
  errorMessage: "",
  loading: false,
  drug: {} as Drug,
  drugadded: false,
};

const slice = createSlice({
  name: "registerDrug",
  initialState,
  reducers: {
    registerDrug: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    registerDrugSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.drugadded = true;
      state.drug = action.payload;
      showToast("Drug registerd successfully", "success");
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
  useInjectSaga({ key: slice.name, saga: RegistrDrugSaga });
  return { actions: slice.actions };
};
