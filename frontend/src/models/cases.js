import Taro from "@tarojs/taro";

export default {
  namespace: "cases",
  state: {
    headers: [],
  },

  effects: {
    *fetchHeaders(_, { put }) {
      const headers = [
        {
          title: "标签页1",
          banner: [
            {
              id: 0,
              image_url:
                "http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5ec9bb9e8df.jpg"
            },
            {
              id: 0,
              image_url:
                "http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5ec9bb9e8df.jpg"
            },
            {
              id: 0,
              image_url:
                "http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5ec9bb9e8df.jpg"
            },
          ]
        },
        {
          title: "标签页1",
          banner: [
            {
              id: 0,
              image_url:
                "http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5ec9bb9e8df.jpg"
            },
            {
              id: 0,
              image_url:
                "http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5ec9bb9e8df.jpg"
            },
            {
              id: 0,
              image_url:
                "http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5ec9bb9e8df.jpg"
            },
          ]
        },
        {
          title: "标签页1",
          banner: [
            {
              id: 0,
              image_url:
                "http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5ec9bb9e8df.jpg"
            },
            {
              id: 0,
              image_url:
                "http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5ec9bb9e8df.jpg"
            },
            {
              id: 0,
              image_url:
                "http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5ec9bb9e8df.jpg"
            },
          ]
        },
        {
          title: "标签页1",
          banner: [
            {
              id: 0,
              image_url:
                "http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5ec9bb9e8df.jpg"
            },
            {
              id: 0,
              image_url:
                "http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5ec9bb9e8df.jpg"
            },
            {
              id: 0,
              image_url:
                "http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5ec9bb9e8df.jpg"
            },
          ]
        },
      ];
      yield put({
        type: "save",
        payload: {
          headers: headers
        }
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  }
};
