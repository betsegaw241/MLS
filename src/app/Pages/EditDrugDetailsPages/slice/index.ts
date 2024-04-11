import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { Drug, EditDrugDetailsPageState } from "../types";
import { EditDrugDetailsSaga } from "./saga";

export const initialState: EditDrugDetailsPageState = {
  errorMessage: "",
  loading: false,
  drug: {} as Drug,
};

const slice = createSlice({
  name: "editDrugDetail",
  initialState,
  reducers: {
    editDrug: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    editDrugSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.drug = action.payload;
    },
    editDrugFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { actions: EditDrugActions } = slice;

export const UseEditDrugDetailsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: EditDrugDetailsSaga });
  return { actions: slice.actions };
};
