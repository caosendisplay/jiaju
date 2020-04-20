import {v1Request} from "../utils/request";

export const view = data =>
  v1Request({
    url: "/api/v1/component/home/",
    method: "GET",
    data
  });

export const fetchFeatured = data =>
  v1Request({
    url: "/api/v1/case/featured/",
    method: "GET",
    data
  });
