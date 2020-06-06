// @flow
import type {Saga} from 'redux-saga';
import {all, fork} from 'redux-saga/effects';
import {networkSaga} from 'react-native-offline';

import app from 'sagas/app';

export default function* rootSaga(): Saga<void> {
  yield all([fork(app), fork(networkSaga, {pingInterval: 2000})]);
}
