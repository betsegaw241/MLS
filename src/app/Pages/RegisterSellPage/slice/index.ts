import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { RegisterSellSaga } from "./saga";
import { IDrug, registerSellPageState } from "./types";
import showToast from "utils/toast";

export const initialState: registerSellPageState = {
  errorMessage: "",
  loading: false,
  isRegsterd: false,
  drug: [],
};

const slice = createSlice({
  name: "registerSell",
  initialState,
  reducers: {
    resgsterSell: (state, action: PayloadAction<IDrug>) => {
      state.loading = true;
    },
    resgsterSellSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.isRegsterd = true;
      showToast(`${action.payload.message}`, "success");
    },
    resgsterSellFailed: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },

    getDrug: (state, action: PayloadAction<string | undefined>) => {},
    getDrugSuccess: (state, action: PayloadAction<any>) => {
      state.drug = action.payload;
    },
    getDrugFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { actions: registerSellActions } = slice;

export const UseRegisterSellSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: RegisterSellSaga });
  return { actions: slice.actions };
};
