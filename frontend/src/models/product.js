import Taro from "@tarojs/taro";

export default {
  namespace: "product",
  state: {
    featured: [],
  },

  effects: {
    *fetchFeatured(_, { put }) {
      console.log('product/fetchFeatured');
      const featured = [
        {
          title: "标签页1",
          images: [
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
          ]
        },
        {
          title: "标签页2",
          images: [
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
          ]
        },
        {
          title: "标签页3",
          images: [
            { id: 0, image_url: "https://i.picsum.photos/id/479/400/250.jpg"},
            { id: 0, image_url: "https://i.picsum.photos/id/479/400/250.jpg"},
            { id: 0, image_url: "https://i.picsum.photos/id/479/400/250.jpg"},
          ]
        },
        {
          title: "标签页4",
          images: [
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
          ]
        },
        {
          title: "标签页5",
          images: [
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
            { id: 0, image_url: "https://picsum.photos/400/250"},
          ]
        },
        {
          title: "标签页1",
          images: [
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
