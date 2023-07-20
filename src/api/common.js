/**
* FunctionName
* @param myParam The parameter for this method
* @description: 负责通用的接口请求
* @author: rexhang
* @email: rexhang@outlook.com
* @date: 2023-01-01 01:01:01
* @version: v0.0.1
**/

// 引入请求实例 request.js
import { request } from '@/utils';

// 登录接口
export function loginSystem(...args) {
  return request.post(`/common/login`, {
    data: {
      ...args,
    }
  });
}

// ...
