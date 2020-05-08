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


export const getView = () =>
  v1Request(
    '/api/v1/component/home/'
  );
