import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { GetUsersListSaga } from "./saga";
import { IuserData, AdminUsersPageState } from "./types";

export const initialState: AdminUsersPageState = {
  errorMessage: "",
  loading: false,
  usersList: {} as IuserData,
};

const slice = createSlice({
  name: "getUsersList",
  initialState,
  reducers: {
    getUsers: (state,action: PayloadAction<any>) => {
      state.loading = true;
    },
    getUsersSuccess: (state, action: PayloadAction<any>) => {
      state.usersList = action.payload;
      state.loading = false;
    },
    getUsersFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: getUsersActions } = slice;

export const UseGetUsersSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: GetUsersListSaga });
  return { actions: slice.actions };
};
