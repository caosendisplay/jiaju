import { oldRequest } from '../../utils/request';

// 获取省市区列表
export const getDistricts = data =>
  oldRequest({
    url: '/common/configs',
    method: 'GET',
    data,
  });

// 更新地址
export const updateAddress = data =>
  oldRequest({
    url: '/user/address',
    method: 'POST',
    data,
  });

// 删除地址
export const removeAddress = data =>
  oldRequest({
    url: '/user/address',
    method: 'DELETE',
    data,
  });
