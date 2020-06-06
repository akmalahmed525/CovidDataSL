// @flow
import type {Actions} from 'store/types';
import {
  FETCH_DATA,
  POPULATE_DATA,
  ON_API_REQUEST_SUCCESS,
  ON_API_REQUEST_FAILED
} from 'store/constants';

export const fetchData = (): Actions => ({type: FETCH_DATA});
export const populateData = (data: Object): Actions => ({
  type: POPULATE_DATA,
  data
});
export const onAPIRequestSuccess = (data: Object): Actions => ({
  type: ON_API_REQUEST_SUCCESS,
  data
});
export const onAPIRequestFailed = (data: Object): Actions => ({
  type: ON_API_REQUEST_FAILED,
  data
});
