import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { data } from "../../../models/user";
import { ManageInventorySaga } from "./saga";
import { Drugs, ManageInventorState } from "./types";

export const initialState: ManageInventorState = {
  errorMessage: "",
  loading: false,
  totalPages: 0,
  drugs: {} as Drugs,
  recentlyadded: {} as Drugs,
  lowStockDrug: {} as Drugs,
  soonExpiringDrugs: {} as Drugs,
  expiredDrugs: {} as Drugs
};

const slice = createSlice({
  name: "manageInventory",
  initialState,
  reducers: {
    getDrugs: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getDrugsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.drugs = action.payload;
    },
    getDrugsFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    getrecentlyaddedDrugs: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getrecentlyaddedDrugsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.recentlyadded = action.payload;
    },
    getrecentlyaddedDrugsFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    getexpiredDrugs: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getexpiredDrugsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.expiredDrugs = action.payload;
    },
    getexpiredDrugsFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    getSoonExpiringDrugs: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getSoonExpiringDrugsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
    state.soonExpiringDrugs = action.payload;
    },
    getSoonExpiringDrugsFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    getLowStockDrugs: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getLowStockDrugsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.lowStockDrug = action.payload;
    },
    getLowStockDrugsFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    getSoldOutDrugs: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getSoldOutDrugsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.soonExpiringDrugs = action.payload;
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
