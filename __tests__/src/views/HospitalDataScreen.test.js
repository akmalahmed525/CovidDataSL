import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import HospitalDataScreen from 'src/views/screens/HospitalDataScreen';

const mockStore = configureStore([]);

describe('Hospital data screen', () => {
  let store;
  let hospitalDataScreen;

  const data = {
    hospital_data: [
      {
        id: 1,
        hospital_id: 1,
        cumulative_local: 943,
        cumulative_foreign: 75,
        treatment_local: 2,
        treatment_foreign: 0,
        created_at: '2020-06-04 13:49:42',
        updated_at: null,
        deleted_at: null,
        cumulative_total: 1018,
        treatment_total: 2,
        hospital: {
          id: 1,
          name: 'National Institute of Infectious Diseases',
          name_si:
            '\u0db6\u0ddd\u0dc0\u0db1 \u0dbb\u0ddd\u0d9c \u0db4\u0dd2\u0dc5\u0dd2\u0db6\u0db3 \u0da2\u0dcf\u0dad\u0dd2\u0d9a \u0d86\u0dba\u0dad\u0db1\u0dba',
          name_ta:
            '\u0ba4\u0bc7\u0b9a\u0bbf\u0baf \u0ba4\u0bca\u0bb1\u0bcd\u0bb1\u0bc1 \u0ba8\u0bcb\u0baf\u0bbf\u0baf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc1\u0bb5\u0ba9\u0bae\u0bcd',
          created_at: '2020-04-11 08:45:06',
          updated_at: '2020-04-11 08:45:06',
          deleted_at: null
        }
      }
    ]
  };

  const locale = 'en';

  const props = {data, locale};

  beforeEach(() => {
    store = mockStore({app: props});
    hospitalDataScreen = renderer.create(
      <Provider store={store}>
        <HospitalDataScreen {...props} />
      </Provider>
    );
  });

  test('Must match the snapshot', () => {
    expect(hospitalDataScreen.toJSON()).toMatchSnapshot();
  });
});
