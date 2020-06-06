// @flow
import type {Actions} from 'store/types';
import {combineReducers} from 'redux';
import {reducer as network} from 'react-native-offline';

import app from 'store/reducers/app';

export default function createRootReducer() {
  return combineReducers<Object, Actions>({app, network});
}
