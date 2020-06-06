import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import PCRTestDataScreen from 'src/views/screens/PCRTestDataScreen';

const mockStore = configureStore([]);

describe('PCR Test Data Screen', () => {
  let store;
  let pcrTestDataScreen;

  const data = {
    daily_pcr_testing_data: [
      {
        date: '2020-02-18',
        count: '1'
      },
      {
        date: '2020-02-19',
        count: '0'
      }
    ]
  };

  const locale = 'en';

  const props = {data, locale};

  beforeEach(() => {
    store = mockStore({app: props});
    pcrTestDataScreen = renderer.create(
      <Provider store={store}>
        <PCRTestDataScreen {...props} />
      </Provider>
    );
  });

  test('Must match the snapshot', () => {
    expect(pcrTestDataScreen.toJSON()).toMatchSnapshot();
  });
});
