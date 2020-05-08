import Taro from "@tarojs/taro";
import { fetchCases, fetchCaseDetail, fetchCategories, fetchFeatured } from "../services/cases";

export default {
  namespace: "cases",
  state: {
    cases: {},
    current_case: {},
    categories: [],
    featured: [],
    selected: -1
  },

  effects: {
    *select({ payload }, { put, select }) {
      yield put({
        type: 'save',
        payload: {
          selected: payload
        }
      });
      const { cases, categories } = yield select((state) => state.cases);
      if (cases[categories[payload].id] === undefined ) {
      yield put({
        type: 'fetchCases',
        payload: {
          page: 1
        }
      })
      }
    },
    *fetchCases( { payload }, {call, put, select }) {
      const { page } = payload;
      let { cases, categories, selected } = yield select((state) => state.cases);
      const category_id = categories[selected].id;
      const data = yield call(fetchCases, { category_id: category_id, page: page });
      yield put({
        type: 'save',
        payload: {
          cases: {
            ...cases,
            [category_id]: {
              page: page,
              ...data
            },
          }
        }
      })
    },
    *fetchCaseDetail({ payload }, { call, put }) {
      const data = yield call(fetchCaseDetail, { case_id: payload.case_id });
      yield put({
        type: 'save',
        payload: {
          current_case: data
        }
      })
    },
    *fetchCategories(_, { call, put, select }) {
      const data = yield call(fetchCategories);
      const { selected } = yield select((state) => state.cases);
      if (selected === -1) {
        yield put({
          type: 'select',
          payload: 0
        })
      }
      yield put({
        type: 'save',
        payload: {
          categories: data
        }
      });
    },
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
