// import * as homeApi from './service';
import { getView } from './service';

export default {
  namespace: 'home',
  state: {
    banner: [],
    about_us: [],
    products_list: [],
    cases: [],
    page: 1,
  },
  effects: {
    *components(_, { put, call, }) {
      const data = yield call(getView, {});
      yield put({
        type: 'save',
        payload: {
          banner: data.components.banner.line_items,
          banner_description: data.components.banner_description.line_items,
          about_us: data.components.about_us.line_items
        }
      });
    },
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },
};
