/**
 * @flow
 */
export type Actions =
  | {type: string}
  | {type: 'FETCH_DATA'}
  | {type: 'POPULATE_DATA', data: Object}
  | {type: 'ON_API_REQUEST_FAILED', data: Object}
  | {type: 'ON_API_REQUEST_SUCCESS', data: Object};
