import {v1Request} from "../utils/request";


export const fetchProductCategories = () =>
  v1Request(
    "/api/v1/product/category/",
  );

export const fetchFeaturedProduct = () =>
  v1Request(
    "/api/v1/product/featured/",
  );

export const fetchProducts = data =>
  v1Request(
    `/api/v1/product/${data.category_id}/`,
    "GET",
    { page: data.page }
  );

export const fetchProductDetail = data =>
  v1Request(
    `/api/v1/product/detail/${data.product_id}/`,
  );

