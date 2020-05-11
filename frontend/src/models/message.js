import Taro from '@tarojs/taro'
import { addMessage } from "../services/message";

export default {
  namespace: "message",
  state: {
    name: "",
    phone: "",
    body: ""
  },

  effects: {
    *add(_, { select, call, put }) {
      const message = yield select((state) => state.message);
      yield call(addMessage, message);
      Taro.showToast({
        title: `消息发送成功`,
        icon: 'none',
        mask: true,
      });
      yield put({
        type: 'save',
        payload: {
          name: "",
          phone: "",
          body: ""
        }
      })
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  }
};
