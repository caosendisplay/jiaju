import Taro from "@tarojs/taro";

export default {
  namespace: "product",
  state: {
    featured: [],
    page: 1,
    products: []
  },

  effects: {
    *fetchProducts(_, { select, call, put }) {
      console.log('product/fetchProducts');
      const { page, products } = yield select((state) => state.product);
      const data = {
        count: 6,
        next: 'http://localhost',
        previous: 'http://localhost',
        results: [
          {
            id: 1,
            cover: {
              id: "f9f1eecb-12e9-4c26-b54c-c88744a094d5",
              image_url: "https://jiaju.caosen.com/media/images/f9f1eecb-12e9-4c26-b54c-c88744a094d5.jpg"
            },
            name: "展览展示"
          },
          {
            id: 2,
            cover: {
              id: "f9f1eecb-12e9-4c26-b54c-c88744a094d5",
              image_url: "https://jiaju.caosen.com/media/images/f9f1eecb-12e9-4c26-b54c-c88744a094d5.jpg"
            },
            name: "展览展示"
          },
          {
            id: 3,
            cover: {
              id: "f9f1eecb-12e9-4c26-b54c-c88744a094d5",
              image_url: "https://jiaju.caosen.com/media/images/f9f1eecb-12e9-4c26-b54c-c88744a094d5.jpg"
            },
            name: "展览展示"
          },
          {
            id: 4,
            cover: {
              id: "f9f1eecb-12e9-4c26-b54c-c88744a094d5",
              image_url: "https://jiaju.caosen.com/media/images/f9f1eecb-12e9-4c26-b54c-c88744a094d5.jpg"
            },
            name: "展览展示"
          },
          {
            id: 5,
            cover: {
              id: "f9f1eecb-12e9-4c26-b54c-c88744a094d5",
              image_url: "https://jiaju.caosen.com/media/images/f9f1eecb-12e9-4c26-b54c-c88744a094d5.jpg"
            },
            name: "展览展示"
          },
          {
            id: 6,
            cover: {
              id: "f9f1eecb-12e9-4c26-b54c-c88744a094d5",
              image_url: "https://jiaju.caosen.com/media/images/f9f1eecb-12e9-4c26-b54c-c88744a094d5.jpg"
            },
            name: "展览展示"
          },
          {
            id: 6,
            cover: {
              id: "f9f1eecb-12e9-4c26-b54c-c88744a094d5",
              image_url: "https://jiaju.caosen.com/media/images/f9f1eecb-12e9-4c26-b54c-c88744a094d5.jpg"
            },
            name: "展览展示"
          },
          {
            id: 6,
            cover: {
              id: "f9f1eecb-12e9-4c26-b54c-c88744a094d5",
              image_url: "https://jiaju.caosen.com/media/images/f9f1eecb-12e9-4c26-b54c-c88744a094d5.jpg"
            },
            name: "展览展示"
          },
          {
            id: 6,
            cover: {
              id: "f9f1eecb-12e9-4c26-b54c-c88744a094d5",
              image_url: "https://jiaju.caosen.com/media/images/f9f1eecb-12e9-4c26-b54c-c88744a094d5.jpg"
            },
            name: "展览展示"
          },
          {
            id: 6,
            cover: {
              id: "f9f1eecb-12e9-4c26-b54c-c88744a094d5",
              image_url: "https://jiaju.caosen.com/media/images/f9f1eecb-12e9-4c26-b54c-c88744a094d5.jpg"
            },
            name: "展览展示"
          },
        ]
      }
      const delay = (ms) => new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
      yield call(delay, 3000);
      yield put({
        type: "save",
        payload: {
          page: page + 1,
          products: products.concat(data.results)
        }
      })
    },
    *fetchFeatured(_, { put }) {
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
