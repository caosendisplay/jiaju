import {v1Request} from "../utils/request";

export const addMessage = data =>
  v1Request(
    `/api/v1/message/`,
    'POST',
    data
  );
