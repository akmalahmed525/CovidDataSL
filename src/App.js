/**
 *
 * @format
 * @flow
 */
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
// $FlowFixMe
import {PersistGate} from 'redux-persist/integration/react';
import {ReduxNetworkProvider} from 'react-native-offline';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';

import RootNavigation from 'navigation';
import theme from 'themes';
import {configureStore} from 'store';

const {store, persistor} = configureStore();

enableScreens();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <ReduxNetworkProvider>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <StatusBar
              backgroundColor={theme.colors.black}
              barStyle="light-content"
            />
            <RootNavigation />
          </SafeAreaProvider>
        </PersistGate>
      </ReduxNetworkProvider>
    </Provider>
  );
};

export default App;
