import { put, takeLatest } from 'redux-saga/effects';
import { CreateAccountPageActions as actions } from '.';
import api from '../../../../API/api';
import { AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';

function* handleCreateAccount(action:PayloadAction<string>) {
    
    try {
        const res: AxiosResponse = yield api({
          route: '/user/create',
          method: 'POST',
          isSecureRoute: true,
          body: { user: action.payload },
        });
        if (res.status === 200) {
          yield put(actions.createAccountSuccess(res));
        }
      } catch (error) {
        console.log(error)
        yield put(actions.createAccountFailed(error));
      }
    }

export function* CreateAccountPageSaga() {
 yield takeLatest(actions.createAccount.type, handleCreateAccount);
}