import { oldRequest } from '../../utils/request';

// 获取商品详情
export const getProductInfo = params =>
  oldRequest({
    url: '/product',
    method: 'GET',
    data: params,
  });
