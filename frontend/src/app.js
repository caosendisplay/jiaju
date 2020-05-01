import Taro, { Component } from '@tarojs/taro';
import { Provider, connect } from '@tarojs/redux';
import Home from './pages/home';
import dva from './utils/dva';
import models from './models';

import './styles/base.scss';

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

@connect(({}) => ({}))
class App extends Component {
  config = {
    pages: [
      'pages/home/index',
      'pages/case/index',
      'pages/cart/index',
      'pages/user/index',
      'pages/detail/index',
      'pages/about/index',
      'pages/size/index',
      'pages/login/index',
      'pages/message/index',
      'pages/couponList/index',
      'pages/order/index',
      'pages/addressList/index',
      'pages/addressUpdate/index',
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
          pagePath: 'pages/user/index',
          text: '我的',
          iconPath: './images/tab/user.png',
          selectedIconPath: './images/tab/user-active.png',
        },
        {
          pagePath: 'pages/test/test',
          text: '测试',
          iconPath: './images/tab/home.png',
          selectedIconPath: './images/tab/user-active.png',
        }
      ],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'white',
    },
  };

  componentDidMount() {
    this.props.dispatch({
      type: "api_config/fetch"
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
