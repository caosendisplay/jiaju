import { v1Request } from "../utils/request";

export default {
  view: data =>
    v1Request({
      url: "/api/v1/component/home/",
      method: "GET",
      data
    })
};
