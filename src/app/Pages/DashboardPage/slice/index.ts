import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { DashboardSaga } from "./saga";
import { DashboardPageState } from "./types";
import { pharmacy } from "../types";

export const initialState: DashboardPageState = {
  pharmcy: {} as pharmacy,
  errorMessage: "",
  isLoading: false,
};

const slice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    GetPharmacy: (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = true;
    },
    GetPharmacySuccess: (
      state: DashboardPageState,
      action: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.pharmcy = action.payload;
      console.log(action.payload);
    },
    GetPharmacyFailed: (
      state: DashboardPageState,
      action: PayloadAction<any>
    ) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { actions: DashboardActions } = slice;

export const useDashboardSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: DashboardSaga });
  return { actions: slice.actions };
};
