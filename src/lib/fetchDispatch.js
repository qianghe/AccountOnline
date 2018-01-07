/*global fetch:true*/
/*eslint no-undef: 'error'*/
import 'whatwg-fetch';
import fetchJsonp from 'fetch-jsonp';
import CreateHashHistory from 'history/createHashHistory';
import { searchParams } from './utils';
import { clearLocalItem } from './storage';

const history = new CreateHashHistory();
// 本地mock端口
// const BASEURL = '//8.zhuanzhuan.com:9001';
// 测试环境
const BASEURL = '//sspapi.zhuanspirit.com';

export const dispatchCors = (config) => {
  const { url, params, method } = config;
  let targetUrl = `${BASEURL}${url}`;
  let fetchParams = {
    method,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
  };
  if (method.toLowerCase() === 'post') {
    fetchParams = {
      ...fetchParams,
      body: JSON.stringify(params),
    };
  } else if (method.toLowerCase() === 'get' && params && Object.keys(params).length) {
    targetUrl = `${targetUrl}?${searchParams(params)}`;
  }
  return fetch(targetUrl, fetchParams)
    .then(response => response.json())
    .then(json => {
      if (json.respCode === 40001) {
        // 清空localstorage
        clearLocalItem('user');
        // 登录信息实效，跳转登录
        history.push('/login');
        return false;
      } else if (json.respCode !== 10001) {
        // message.error('失败');
      }
      return json;
    }).catch(() => {
      // message.error('网络异常' + e, 3);
    });
};

export const dispatchAll = ({ options }) => {
  Promise.all(options.map(({ url, params }) => {
    return dispatchCors({
      url,
      params,
    });
  }));
};

export const dispatchJsonp = (targetUrl) => {
  return fetchJsonp(targetUrl, {
    jsonpCallback: 'callback',
    timeout: 10000,
  }).then(response => response.json());
};
