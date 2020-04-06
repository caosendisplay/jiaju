import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Banner from "../../components/Banner";
import BannerDescription from "../../components/BannerDescription";
import './index.scss';
import ContactDialog from "../../components/ContactDialog";
import SubHeader from "../../components/SubHeader";
import HorizontalScrollHeader from "../../components/HorizontalScrollHeader";
import HorizontalScrollList from "../../components/HorizontalScrollList";

@connect(({ home, cart, loading }) => ({
  ...home,
  ...cart,
  ...loading,
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: 'home/load',
    });
    this.props.dispatch({
      type: 'home/product',
    });
    this.props.dispatch({
      type: 'home/components',
    });
    this.props.dispatch({
      type: 'home/fetchCaseList',
    });
    this.props.dispatch({
      type: 'home/fetchFeaturedCases'
    });


    // 设置衣袋小红点
    if (this.props.items.length > 0) {
      Taro.setTabBarBadge({
        index: 1,
        text: String(this.props.items.length),
      });
    } else {
      Taro.removeTabBarBadge({
        index: 1,
      });
    }
  };

  //分享
  onShareAppMessage() {
    return {
      title: '高端家具定制',
      path: '/pages/home/index',
    };
  }

  // 小程序上拉加载
  onReachBottom() {
    this.props.dispatch({
      type: 'home/save',
      payload: {
        page: this.props.page + 1,
      },
    });
    this.props.dispatch({
      type: 'home/product',
    });
  }

  render() {
    const { banner, case_list, current_cases } = this.props;
    return (
      <View className="home-page">
        <View className="banner-view">
          <Banner images={banner} home />
          <BannerDescription />
        </View>

        <View className="contact-view">
          <SubHeader text="联系我们" />
          <ContactDialog />
        </View>

        <View className="case-view">
          <SubHeader text="工程案例" />
          <HorizontalScrollHeader headers={case_list} />
          <HorizontalScrollList items={current_cases} />
        </View>

        <View className="bottom-padding-view" />
      </View>
    );
  }
}

export default Index;
