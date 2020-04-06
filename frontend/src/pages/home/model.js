import * as homeApi from './service';

export default {
  namespace: 'home',
  state: {
    banner: [],
    brands: [],
    products_list: [],
    case_list: [],
    current_cases: [],
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
    *fetchCaseList(_, { put }) {
      const case_list = [
        { 'id': '0', 'title': '中式' },
        { 'id': '1', 'title': '中式' },
        { 'id': '2', 'title': '中式' },
        { 'id': '3', 'title': '中式' },
        { 'id': '4', 'title': '中式' },
        { 'id': '5', 'title': '中式' },
        { 'id': '6', 'title': '中式' },
      ];
      yield put({
        type: 'save',
        payload: {
          case_list: case_list
        }
      })
    },
    *fetchFeaturedCases(_, { put }) {
      const featured_cases = [
          { id: 1, title: '中式花园', image_url: 'http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5f0a918dd7f.jpg' },
          { id: 1, title: '中式花园', image_url: 'http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5f0a918dd7f.jpg' },
          { id: 1, title: '中式花园', image_url: 'http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5f0a918dd7f.jpg' },
          { id: 1, title: '中式花园', image_url: 'http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5f0a918dd7f.jpg' },
          { id: 1, title: '中式花园', image_url: 'http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5f0a918dd7f.jpg' },
          { id: 1, title: '中式花园', image_url: 'http://m.baitesi.cn/Uploads/Content/2018-01-17/5a5f0a918dd7f.jpg' },
      ];
      yield put({
        type: 'save',
        payload: {
          current_cases: featured_cases
        }
      })

    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
