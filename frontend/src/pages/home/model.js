import * as homeApi from './service';

export default {
  namespace: 'home',
  state: {
    banner: [],
    brands: [],
    products_list: [],
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
    *components(_, { call, put }) {
      const data = yield call(homeApi.view, {});
      yield put({
        type: 'save',
        payload: {
          banner: data.components.banner.line_items
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
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
