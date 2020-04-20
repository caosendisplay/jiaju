import Taro from "@tarojs/taro";
import { fetchFeatured } from "../services/cases";

export default {
  namespace: "cases",
  state: {
    featured: [],
  },

  effects: {
    *fetchFeatured(_, { call, put }) {
      console.log('case/fetchFeatured');
      const data = yield call(fetchFeatured, {});
      console.log(data);
      yield put({
        type: "save",
        payload: {
          featured: data
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
