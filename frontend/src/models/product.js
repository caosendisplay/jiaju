import Taro from "@tarojs/taro";
import { fetchProducts, fetchProductDetail, fetchProductCategories, fetchFeaturedProduct } from "../services/product";

export default {
  namespace: "product",
  state: {
    products: {},
    current_product: {},
    categories: [],
    featured: [],
    selected: -1,
  },

  effects: {
    *select({ payload }, { put, select }) {
      yield put({
        type: 'save',
        payload: {
          selected: payload
        }
      });
      const { products, categories } = yield select((state) => state.product);
      if (products[categories[payload].id] === undefined ) {
        yield put({
          type: 'fetchProducts',
          payload: {
            page: 1
          }
        })
      }
    },
    *fetchProducts({ payload }, { select, call, put }) {
      const { page } = payload;
      let { products, categories, selected } = yield select((state) => state.product);
      const category_id = categories[selected].id;
      const data = yield call(fetchProducts, { category_id: category_id, page: page });
      yield put({
        type: 'save',
        payload: {
          products: {
            ...products,
            [category_id]: {
              page: page,
              ...data
            },
          }
        }
      })
    },
    *fetchProductDetail({ payload }, { call, put }) {
      const data = yield call(fetchProductDetail, { product_id: payload.product_id });
      yield put({
        type: 'save',
        payload: {
          current_product: data
        }
      })
    },
    *fetchCategories(_, { call, put, select }) {
      const data = yield call(fetchProductCategories);
      const { selected } = yield select((state) => state.product);
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
      const data = yield call(fetchFeaturedProduct, {});
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
