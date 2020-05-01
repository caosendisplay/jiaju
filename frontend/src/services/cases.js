import {v1Request} from "../utils/request";

export const view = () =>
  v1Request(
    "/api/v1/component/home/",
  );

export const fetchCategories = () =>
  v1Request(
    "/api/v1/case/category/",
  );

export const fetchFeatured = () =>
  v1Request(
    "/api/v1/case/featured/",
  );

export const fetchCases = data =>
  v1Request(
    `/api/v1/case/${data.category_id}/`,
    "GET",
    { page: data.page }
  );

