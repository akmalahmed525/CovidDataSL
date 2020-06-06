import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import SplashScreen from 'src/views/screens/SplashScreen';

const mockStore = configureStore([]);

describe('Splash screen', () => {
  let store;
  let splashScreen;

  const fetchData = jest.fn();
  const error = false;
  const isConnected = true;
  const isRequestSuccess = true;
  const locale = 'en';

  const props = {fetchData, error, isRequestSuccess, locale};

  beforeEach(() => {
    store = mockStore({app: props, network: {isConnected}});
    splashScreen = renderer.create(
      <Provider store={store}>
        <SplashScreen {...props} />
      </Provider>
    );
  });

  test('Must match the snapshot', () => {
    expect(splashScreen.toJSON()).toMatchSnapshot();
  });
});
