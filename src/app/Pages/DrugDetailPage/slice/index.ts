import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { GetDrugDetailSaga } from "./saga";
import { IDrug, DrugDetailPageState, IDrugdata } from "./types";

export const initialState: DrugDetailPageState = {
  errorMessage: "",
  loading: false,
  isDrugAdded: false,
  drugDetail: {} as IDrug,
  drugStock: {} as IDrugdata,
};

const slice = createSlice({
  name: "drugDetail",
  initialState,
  reducers: {
    getDrugDetail: (state, action: PayloadAction<string | undefined>) => {
      state.loading = true;
    },
    getDrugDetailSuccess: (state, action: PayloadAction<any>) => {
      state.drugDetail = action.payload;
      state.loading = false;
    },
    getDrugDetailFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.loading = false;
    },
    getDrugStock: (state, action: PayloadAction<string | undefined>) => {
      state.loading = true;
    },
    getDrugStockSuccess: (state, action: PayloadAction<any>) => {
      state.drugStock = action.payload;
      state.loading = false;
    },
    getDrugStockFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: getDrugDetailActions } = slice;

export const UseGetDrugDetailSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: GetDrugDetailSaga });
  return { actions: slice.actions };
};
