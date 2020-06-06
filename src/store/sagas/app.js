// @flow
import type {Saga} from 'redux-saga';
import {takeEvery, put, call, select} from 'redux-saga/effects';

import {onAPIRequestSuccess, onAPIRequestFailed} from 'actions';
import {FETCH_DATA} from 'store/constants';
import {getData} from 'api';
import {t} from 'i18n';

function* fetchDataAsync(): Saga<void> {
  try {
    const {app, network} = yield select();
    const {isConnected} = network;
    const {locale} = app;
    if (isConnected) {
      const {data, success} = yield call(getData);
      if (success) {
        yield put(onAPIRequestSuccess(data));
      }
      return;
    }
    yield put(
      onAPIRequestFailed({message: t('placeholders.no_connection', locale)})
    );
  } catch (error) {
    yield put(onAPIRequestFailed({}));
  }
}

export default function* (): Saga<void> {
  yield takeEvery(FETCH_DATA, fetchDataAsync);
}
