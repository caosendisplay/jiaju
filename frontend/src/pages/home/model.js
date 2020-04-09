import * as homeApi from './service';

export default {
  namespace: 'home',
  state: {
    banner: [],
    brands: [],
    products_list: [],
    cases: [],
    page: 1,
  },
  effects: {
    *load(_, { call, put }) {
      const { status, data } = yield call(homeApi.homepage, {});
      if (status === 'ok') {
        yield put({
          type: 'save',
          payload: {
            brands: data.brands,
          },
        });
      }
    },
    *components(_, { put }) {
      // const data = yield call(homeApi.view, {});
      const data = [
        { image_url: 'http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5f0a918dd7f.jpg' },
        { image_url: 'http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5f0a918dd7f.jpg' },
        { image_url: 'http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5f0a918dd7f.jpg' },
      ]
      yield put({
        type: 'save',
        payload: {
          banner: data
        }
      })
    },
    *product(_, { call, put, select }) {
      const { page, products_list } = yield select(state => state.home);
      const { status, data } = yield call(homeApi.product, {
        page,
        mode: 1,
        type: 0,
        filter: 'sort:recomm|c:330602',
      });
      if (status === 'ok') {
        yield put({
          type: 'save',
          payload: {
            products_list:
              page > 1 ? [...products_list, ...data.rows] : data.rows,
          },
        });
      }
    },
    *fetchCaseList(_, { put }) {
      const cases = [
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
          cases: cases
        }
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
