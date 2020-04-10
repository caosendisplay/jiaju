// import * as homeApi from './service';

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
    * components(_, {put}) {
      // const data = yield call(homeApi.view, {});
      const data = {
        "components": {
          "banner": {
            "line_items": [
              {
                "image_url": "http://localhost:8000/media/images/e8799ced-e9b5-4223-9d51-3d3d16318c42.jpg",
                "short_description": null,
                "description": null
              },
            ]
          },
          banner_description: {
            line_items: [
              {
                id: "banner-description-year",
                image_url: null,
                short_description: "30年",
                description: "asdkljasd"
              },
              {
                id: "banner-description-space",
                image_url: null,
                short_description: "45000m²",
                description: "sdlkjadlkajs"
              },
              {
                id: "banner-description-team",
                image_url: null,
                short_description: "500+",
                description: "asdlhasjhd"
              },
              {
                id: "banner-description-revenue",
                image_url: null,
                short_description: "1.5亿",
                description: "asdakqwh"
              }
            ]
          },
          about_us: {
            line_items: [
              {
                image_url: "http://localhost:8000/media/images/e900e797-311b-4bc2-8348-c4189ac6168f.jpg",
                short_description: "服务流程",
                descriptions: null
              },
              {
                image_url: "http://localhost:8000/media/images/e900e797-311b-4bc2-8348-c4189ac6168f.jpg",
                short_description: "合作伙伴",
                descriptions: null
              },
            ]
          }
        }
      };
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
