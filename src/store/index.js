// @flow
import configureStoreDev from 'store/store.dev';
import configureStoreProd from 'store/store.prod';

const selectedConfigureStore =
  process.env.NODE_ENV === 'development'
    ? configureStoreDev
    : configureStoreProd;

export const {configureStore} = selectedConfigureStore;
