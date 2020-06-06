/**
 *
 * @flow
 */
import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// $FlowFixMe
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootSaga from 'store/sagas';
import createRootReducer from 'store/reducers';

const enhancers = [];
const middleware = [];

const persistConfig = {
  timeout: 0,
  blacklist: ['network', 'app'],
  key: 'root',
  storage: AsyncStorage
};

// declaring flow module definition.
declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

export const configureStore = (initialState: Object = {}) => {
  const rootReducer = createRootReducer();

  // persisted reducer initiation
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  // Skip redux logs in console during the tests
  if (process.env.NODE_ENV !== 'test') {
    middleware.push(logger);
  }

  enhancers.push(applyMiddleware(...middleware));
  const enhancer = compose(...enhancers);

  const store = createStore<any, Object, any>(
    persistedReducer,
    initialState,
    enhancer
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept(
      'store/reducers',
      // eslint-disable-next-line global-require
      // $FlowFixMe
      () => store.replaceReducer(require('store/reducers').default)
    );
  }

  const persistor = persistStore(store);

  return {store, persistor};
};

export default {configureStore};
