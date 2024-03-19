import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { data } from "../../../models/user";
import { ManageInventorState } from "../types";
import { ManageInventorySaga } from "./saga";

export const initialState: ManageInventorState = {
  errorMessage: "",
  loading: false,
};

const slice = createSlice({
  name: "manageInventory",
  initialState,
  reducers: {
    getDrugs: (state) => {
      state.loading = true;
    },
    getDrugsSuccess: (state, action: PayloadAction<data>) => {
      state.loading = false;
      // state.user = action.payload;
    },
    getDrugsFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    getrecentlyaddedDrugs: (state) => {
      state.loading = true;
    },
    getrecentlyaddedDrugsSuccess: (state, action: PayloadAction<data>) => {
      state.loading = false;
      // state.user = action.payload;
    },
    getrecentlyaddedDrugsFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    getexpiredDrugs: (state) => {
      state.loading = true;
    },
    getexpiredDrugsSuccess: (state, action: PayloadAction<data>) => {
      state.loading = false;
      // state.user = action.payload;
    },
    getexpiredDrugsFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    getSoonExpiringDrugs: (state) => {
      state.loading = true;
    },
    getSoonExpiringDrugsSuccess: (state, action: PayloadAction<data>) => {
      state.loading = false;
      // state.user = action.payload;
    },
    getSoonExpiringDrugsFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    getLowStockDrugs: (state) => {
      state.loading = true;
    },
    getLowStockDrugsSuccess: (state, action: PayloadAction<data>) => {
      state.loading = false;
      // state.user = action.payload;
    },
    getLowStockDrugsFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    getSoldOutDrugs: (state) => {
      state.loading = true;
    },
    getSoldOutDrugsSuccess: (state, action: PayloadAction<data>) => {
      state.loading = false;
      // state.user = action.payload;
    },
    getSoldOutDrugsFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { actions: ManageInventoryActions } = slice;

export const UseManageInventorySlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ManageInventorySaga });
  return { actions: slice.actions };
};
