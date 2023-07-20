/**
* FunctionName
* @param myParam The parameter for this method
* @description: 负责用户相关的接口请求
* @author: rexhang
* @email: rexhang@outlook.com
* @date: 2023-01-01 01:01:01
* @version: v0.0.1
**/

// 引入请求实例 request.js
import { request } from '@/utils';

// 用户模块名称
const moduleName = '/userModule';

// 获取用户信息
export function getUserInfo(...args) {
  return request.get('/users');
}

// ...
