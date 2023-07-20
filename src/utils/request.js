/* 封装axios用于发送请求 */
import axios from 'axios';

import { HTTP_ERRORS } from './http-errors';

import { BASE_URL } from './base-url';

export const TIMEOUT = 5000;

// 创建一个新的axios实例
const request = axios.create({
  // 请求的地址前缀 eg => demo.com/api/getHost
  baseURL: BASE_URL[process.env.NODE_ENV],
  // 允许跨域请求携带 cookie
  withCredentials: true,
  // 超时时间 单位 ms
  timeout: TIMEOUT,
  headers: {
    // 允许跨域请求来源任意域名
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

// 添加请求拦截器
request.interceptors.request.use(config => {
  // 可以对 config.header 进行加工 比如说加入token...
  // config.headers.Authorization = `Bearer ${token}`
  // 针对development环境 通过@api 创建的新axios实例请求时加上前缀 /internal 命中 proxy代理
  if (process.env.NODE_ENV === 'development') {
    config.url = `/internal${config.url}`;
  }
  return config;
}, error => {
  // 对请求错误做些什么...
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(response => {
  // 可以对返回的接口数据包装一层处理，或者剥开一层处理...
  // if (response.headers['x-total-count']) {
  //   return {
  //     total: +response.headers['x-total-count'],
  //     data: response.data
  //   }
  // }
  return response.data;
}, error => {
  // 对响应错误做点什么...
  if (error.response) {
    if (HTTP_ERRORS[error.response.status]) {
      error.message = HTTP_ERRORS[error.response.status];
    }
  }
  return Promise.reject(error);
});

export default request
