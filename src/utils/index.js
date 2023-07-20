import * as axiosRequest from './request.js';

export * from './http-errors.js';

export const request = axiosRequest.default;

export const TIMEOUT = axiosRequest.TIMEOUT;
