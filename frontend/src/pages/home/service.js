import { oldRequest, v1Request } from '../../utils/request';

export const homepage = data =>
  oldRequest({
    url: '/homepage-v3',
    method: 'GET',
    data,
  });

export const product = data =>
  oldRequest({
    url: '/product/filter',
    method: 'GET',
    data,
  });


export const view = data =>
  v1Request({
    url: '/api/v1/component/home/',
    method: 'GET',
    data,
  });
