import Taro from "@tarojs/taro";

export default {
  namespace: "product",
  state: {
    featured: [],
  },

  effects: {
    *fetchFeatured(_, { put }) {
      const featured = [
        {
          title: "标签页1",
          banner: [
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
          ]
        },
        {
          title: "标签页2",
          banner: [
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
          ]
        },
        {
          title: "标签页3",
          banner: [
            { id: 0, image_url: "https://i.picsum.photos/id/479/400/250.jpg"},
            { id: 0, image_url: "https://i.picsum.photos/id/479/400/250.jpg"},
            { id: 0, image_url: "https://i.picsum.photos/id/479/400/250.jpg"},
          ]
        },
        {
          title: "标签页4",
          banner: [
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
          ]
        },
        {
          title: "标签页5",
          banner: [
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
          ]
        },
        {
          title: "标签页1",
          banner: [
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
          ]
        },
      ];
      yield put({
        type: "save",
        payload: {
          featured: featured
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
