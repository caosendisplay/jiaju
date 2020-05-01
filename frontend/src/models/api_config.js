import Taro from "@tarojs/taro";
import { fetchConfig } from "../services/api_config";

export default {
  namespace: "api_config",
  state: {},

  effects: {
    *fetch(_, { call, put }) {
      const data = yield call(fetchConfig);
      yield put({
        type: 'save',
        payload: data
      })
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  }
};
