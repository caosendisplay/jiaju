import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import Banner from "../../components/Banner";
import BannerDescription from "../../components/BannerDescription";
import ContactDialog from "../../components/ContactDialog";
import SubHeader from "../../components/SubHeader";
import ScrollSelectBannerView from "../../components/ScrollSelectBannerView";

import "./index.scss";

@connect(({ home, cart, cases, product }) => ({
  home,
  cart,
  cases,
  product
}))
class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentDidMount = () => {
    this.props.dispatch({
      type: "home/components"
    });
    this.props.dispatch({
      type: "cases/fetchFeatured"
    });
    this.props.dispatch({
      type: "product/fetchFeatured"
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
    const { home, cases, product } = this.props;
    return (
      <View className="home-page">
        <View className="section banner-view">
          <View className="banner">
            <Banner images={home.banner} name="home" />
          </View>
          <View className="banner-description">
            <BannerDescription texts={home.banner_description} />
          </View>
        </View>

        <View className="section case-view">
          <SubHeader text="工程案例" />
          <ScrollSelectBannerView cases={cases.featured} />
        </View>

        <View className="section product-view">
          <SubHeader text="产品中心" />
          <ScrollSelectBannerView cases={product.featured} />
        </View>

        {home.about_us.map((i, index) => (
          <View className="section about-us-view" key={index}>
            <SubHeader text={i.short_description} />
            <Banner images={[i]} name="about-us" />
          </View>
        ))}

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
