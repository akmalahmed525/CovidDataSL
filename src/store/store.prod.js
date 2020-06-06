/**
 * @flow
 */
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
// $FlowFixMe
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootSaga from 'store/sagas';
import createRootReducer from 'store/reducers';

const persistConfig = {
  timeout: 0,
  blacklist: ['network', 'app'],
  key: 'root',
  storage: AsyncStorage
};

const rootReducer = createRootReducer();
const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

function configureStore(initialState: Object = {}) {
  // persisted reducer initiation
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore<any, Object, any>(
    persistedReducer,
    initialState,
    enhancer
  );
  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  return {store, persistor};
}

export default {configureStore};
