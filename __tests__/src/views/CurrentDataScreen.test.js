import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import CurrentDataScreen from 'src/views/screens/CurrentDataScreen';

const mockStore = configureStore([]);

describe('Current data screen', () => {
  let store;
  let currentDataScreen;

  const data = {
    update_date_time: '2020-06-04 16:26:12',
    local_new_cases: 40,
    local_total_cases: 1789,
    local_total_number_of_individuals_in_hospitals: 56,
    local_deaths: 11,
    local_new_deaths: 0,
    local_recovered: 839,
    local_active_cases: 939,
    global_new_cases: 121413,
    global_total_cases: 6585656,
    global_deaths: 388247,
    global_new_deaths: 4929,
    global_recovered: 3181132,
    total_pcr_testing_count: 70290
  };

  const locale = 'en';

  const props = {data, locale};

  beforeEach(() => {
    store = mockStore({app: props});
    currentDataScreen = renderer.create(
      <Provider store={store}>
        <CurrentDataScreen {...props} />
      </Provider>
    );
  });

  test('Must match the snapshot', () => {
    expect(currentDataScreen.toJSON()).toMatchSnapshot();
  });
});
