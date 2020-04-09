import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtTabs, AtTabsPane } from "taro-ui";

import Banner from "../../components/Banner";
import BannerDescription from "../../components/BannerDescription";
import ContactDialog from "../../components/ContactDialog";
import SubHeader from "../../components/SubHeader";
import HorizontalScrollHeader from "../../components/HorizontalScrollHeader";
import HorizontalScrollList from "../../components/HorizontalScrollList";
import ScrollSelectBannerView from "../../components/ScrollSelectBannerView";

import "./index.scss";

@connect(({ home, cart, loading }) => ({
  ...home,
  ...cart,
  ...loading
}))
class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: "home/load"
    });
    this.props.dispatch({
      type: "home/product"
    });
    this.props.dispatch({
      type: "home/components"
    });
    this.props.dispatch({
      type: "home/fetchCaseList"
    });
  };

  //分享
  onShareAppMessage() {
    return {
      title: "高端家具定制",
      path: "/pages/home/index"
    };
  }

  onClickCaseHeader() {}

  render() {
    const { banner, cases } = this.props;
    return (
      <View className="home-page">
        <View className="section banner-view">
          <View className="banner">
            <Banner images={banner} name="home" />
          </View>
          <View className="banner-description">
            <BannerDescription />
          </View>
        </View>

        <View className="section case-view">
          <SubHeader text="工程案例" />
          <ScrollSelectBannerView cases={cases} />
        </View>

        <View className="section contact-view">
          <SubHeader text="联系我们" />
          <ContactDialog />
        </View>

        <View className="bottom-padding-view" />
      </View>
    );
  }
}

export default Index;
