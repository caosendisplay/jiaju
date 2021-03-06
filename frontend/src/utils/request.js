import Taro from '@tarojs/taro';
import config from '../config';

const request_data = {
  platform: 'wap',
  rent_mode: 2,
};

export const oldRequest = (options = { method: 'GET', data: {} }) => {
  if (!config.noConsole) {
    console.log(
      `${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(options.data)}`
    );
  }
  return Taro.request({
    url: config.oldBaseUrl + options.url,
    data: {
      ...request_data,
      ...options.data,
    },
    header: {
      'Content-Type': 'application/json',
    },
    method: options.method.toUpperCase(),
  }).then(res => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (!config.noConsole) {
        console.log(
          `${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`,
          res.data
        );
      }
      if (data.status !== 'ok') {
        Taro.showToast({
          title: `${res.data.error.message}~` || res.data.error.code,
          icon: 'none',
          mask: true,
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  });
};

export const v1Request = (url, method = 'GET', data = {}) => {
  if (!config.noConsole) {
    console.log(
      `${new Date().toLocaleString()}【 M=${url} 】P=${JSON.stringify(data)}`
    );
  }
  return Taro.request({
    url: config.baseUrl + url,
    data: {
      ...data,
    },
    header: {
      'Content-Type': 'application/json',
    },
    method: method.toUpperCase(),
  }).then(res => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      if (!config.noConsole) {
        console.log(`${new Date().toLocaleString()}【 M=${url} 】【接口响应：】`, res.data);
      }
      return res.data;
    } else {
      Taro.showToast({
        title: `${res.data}~` || res.statusCode,
        icon: 'none',
        mask: true,
      });
    }
  });
};
