import { combineReducers } from '@reduxjs/toolkit';
import { InjectedReducersType } from './types/types';

export const createReducer = (injectedReducers: InjectedReducersType = {}) => {
  if (Object.keys(injectedReducers).length === 0) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (state: any) => state;
  } else {
    return combineReducers({ ...injectedReducers });
  }
};
