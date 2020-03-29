import { oldRequest } from '../../utils/request';

// 老用户登录
export const login = data =>
  oldRequest({
    url: '/user/login',
    method: 'POST',
    data,
  });

// 获取手机验证码
export const getSms = data =>
  oldRequest({
    url: '/common/sms',
    method: 'GET',
    data,
  });

// 获取语音验证码
export const getSmsVoice = data =>
  oldRequest({
    url: '/common/voice',
    method: 'GET',
    data,
  });

// 发券
export const getReceive = data =>
  oldRequest({
    url: '/coupon/receive-v2',
    method: 'POST',
    data,
  });
