/**
 * @flow
 */
import {ON_API_REQUEST_SUCCESS, ON_API_REQUEST_FAILED} from 'store/constants';

export default function (
  state: Object = {locale: 'en', data: {}, isRequestSuccess: false},
  action: Object
) {
  switch (action.type) {
    case ON_API_REQUEST_SUCCESS: {
      return {
        ...state,
        isRequestSuccess: true,
        error: false,
        data: action.data
      };
    }
    case ON_API_REQUEST_FAILED: {
      return {
        ...state,
        isRequestSuccess: false,
        error: true,
        data: action.data
      };
    }
    default: {
      return state;
    }
  }
}
