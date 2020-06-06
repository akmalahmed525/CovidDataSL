// @flow
import axios from 'axios';
import Config from 'react-native-config';

const apiURL = Config.API_URL;
const endpoint = `${apiURL}/api/get-current-statistical`;

export const getData = (): Promise<any> =>
  new Promise((resolve: Function, reject: Function) =>
    axios
      .get(endpoint)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  );
