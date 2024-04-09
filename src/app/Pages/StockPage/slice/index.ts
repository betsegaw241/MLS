import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { GetDrugsListSaga } from "./saga";
import { IDrugdata, PharmacyStockPageState } from "./types";

export const initialState: PharmacyStockPageState = {
  errorMessage: "",
  loading: false,
  isDrugAdded: false,
  drugsList: {} as IDrugdata,
};

const slice = createSlice({
  name: "getDrugsList",
  initialState,
  reducers: {
    getDrugs: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getDrugsSuccess: (state, action: PayloadAction<any>) => {
      state.drugsList = action.payload;
      state.loading = false;
    },
    getDrugsFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: getDrugsActions } = slice;

export const UseGetDrugsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: GetDrugsListSaga });
  return { actions: slice.actions };
};
