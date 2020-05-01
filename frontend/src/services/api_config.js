import {v1Request} from "../utils/request";

export const fetchConfig = () =>
  v1Request(
    `/api/v1/config/`,
  );
