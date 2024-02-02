import { call, put, takeLatest } from 'redux-saga/effects';
// import { AxiosResponse } from 'axios';
import { defaultLayoutActions as actions } from '.';
import { PayloadAction } from '@reduxjs/toolkit';

import  CallApi  from 'API/index';
import { IUserModel } from 'app/models/user';
import { FormValues } from 'app/pages/Login/types';

function* handleLogin(action: PayloadAction<FormValues>) {

  try {
    const res: IUserModel = yield call(CallApi, {
      method: 'POST',
      route: '/user/login',
      body: action.payload,
      isSecureRoute: true,
    });

    yield put({ type: actions.loginSuccess.type, payload: res });
    console.log(res);
    localStorage.setItem('token', `${res.token}`);
    localStorage.setItem('id', `${res._id}`);
    localStorage.setItem('email', `${res.email}`);
    // localStorage.setItem('name', `${res.name}`);
    localStorage.setItem('role', `${res.role}`);
  } catch (error) {
  
    yield put({
      type: actions.loginFailed.type,
      payload: `${error}`,
    });
  }
}

export function* DefaultLayoutSaga() {
  yield takeLatest(actions.login.type, handleLogin);
}
