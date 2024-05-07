import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { data } from "../../../models/user";
import { ManageInventorState } from "../types";
import { ManageInventorySaga } from "./saga";
import { Drug } from "app/Components/ManageInventory/types";

export const initialState: ManageInventorState = {
  errorMessage: "",
  loading: false,
  totalPages: 0,
  drugs: [] as Drug[],
  recentlyadded: [],
  lowStockDrug: [],
  soonExpiringDrugs:[],
};

const slice = createSlice({
  name: "manageInventory",
  initialState,
  reducers: {
    getDrugs: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getDrugsSuccess: (state, action: PayloadAction<data>) => {
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
    getrecentlyaddedDrugsSuccess: (state, action: PayloadAction<data>) => {
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
    getexpiredDrugsSuccess: (state, action: PayloadAction<data>) => {
      state.loading = false;
      //state.user = action.payload;
    },
    getexpiredDrugsFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    getSoonExpiringDrugs: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getSoonExpiringDrugsSuccess: (state, action: PayloadAction<data>) => {
      state.loading = false;
      //state.user = action.payload;
    },
    getSoonExpiringDrugsFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    getLowStockDrugs: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getLowStockDrugsSuccess: (state, action: PayloadAction<data>) => {
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
    getSoldOutDrugsSuccess: (state, action: PayloadAction<data>) => {
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
