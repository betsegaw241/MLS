import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { CreateFeedbacksListSaga } from "./saga";
import { IFeedbackData, CreateFeedbackPageState } from "./types";

export const initialState: CreateFeedbackPageState = {
  errorMessage: "",
  loading: false,
  feedbacks: {} as IFeedbackData,
  isCreated: false,
};

const slice = createSlice({
  name: "createFeedbacks",
  initialState,
  reducers: {
    
    createFeedbacks: (state, action: PayloadAction<any>) => {
      state.loading = true;
     state.isCreated = false;

      
    },
    createFeedbacksSuccess: (state, action: PayloadAction<any>) => {
      // state.FeedbacksList = action.payload;
      state.loading = false;
      state.isCreated = true;
console.log('====================================');
console.log('------------jjj');
console.log('====================================');
    },
    createFeedbacksFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.loading = false;
      state.isCreated = false;

    },
  },
});

export const { actions: createFeedbacksActions } = slice;

export const UseCreateFeedbacksSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: CreateFeedbacksListSaga });
  return { actions: slice.actions };
};
