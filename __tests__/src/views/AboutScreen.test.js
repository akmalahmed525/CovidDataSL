import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import AboutScreen from 'src/views/screens/AboutScreen';

const mockStore = configureStore([]);

describe('About screen', () => {
  let store;
  let aboutScreen;

  beforeEach(() => {
    store = mockStore({});
    aboutScreen = renderer.create(
      <Provider store={store}>
        <AboutScreen />
      </Provider>
    );
  });

  test('Must match the snapshot', () => {
    expect(aboutScreen.toJSON()).toMatchSnapshot();
  });
});
