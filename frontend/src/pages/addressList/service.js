import { oldRequest } from '../../utils/request';

export const getAddressList = data =>
  oldRequest({
    url: '/user/address',
    method: 'GET',
    data,
  });
