import Taro, { Component } from '@tarojs/taro';
import { Provider  } from '@tarojs/redux';

import Home from './pages/home';
import dva from './utils/dva';
import models from './models';
import './styles/base.scss';

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

// Fetch global config from backend.
dva.getDispatch()({
  type: "api_config/fetch"
});

class App extends Component {
  config = {
    pages: [
      'pages/home/index',
      'pages/case/index',
      'pages/caseDetail/index',
      'pages/product/index',
      'pages/test/test',
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '高端家具定制',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/home/index',
          text: '首页',
          iconPath: './images/tab/home.png',
          selectedIconPath: './images/tab/home-active.png',
        },
        {
          pagePath: 'pages/case/index',
          text: '案例',
          iconPath: './images/tab/cart.png',
          selectedIconPath: './images/tab/cart-active.png',
        },
        {
          pagePath: 'pages/product/index',
          text: '产品',
          iconPath: './images/tab/home.png',
          selectedIconPath: './images/tab/user-active.png',
        },
        {
          pagePath: 'pages/test/test',
          text: '我的',
          iconPath: './images/tab/user.png',
          selectedIconPath: './images/tab/user-active.png',
        },
      ],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'white',
    },
  };

  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
