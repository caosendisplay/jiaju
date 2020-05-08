import Taro, {Component} from "@tarojs/taro";
import {Image, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import {AtActivityIndicator} from "taro-ui";

import BannerDescription from "../../components/BannerDescription";
import ContactDialog from "../../components/ContactDialog";
import SubHeader from "../../components/SubHeader";
import ScrollSelectBannerView from "../../components/ScrollSelectBannerView";

import "./index.scss";

@connect(({home, cases, product, loading}) => ({
  home,
  cases,
  product,
  loading
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

  onClickCaseHeader() {
  }

  render() {
    const {home, cases, product, loading} = this.props;
    console.log(loading.effects['home/components'], home);
    return (
      <View className="home-page">
        <View className="section banner-view">
          <View className="banner">
            {loading.effects['home/components'] === false
              ? <Image src={home.banner[0].image_url} mode="widthFix"/>
              : <AtActivityIndicator mode='center' content='加载中...'/>
            }
          </View>
          <View className="banner-description">
            <BannerDescription texts={home.banner_description}/>
          </View>
        </View>

        <View className="section case-view">
          <SubHeader text="工程案例" />
          {loading.effects['cases/fetchFeatured'] === false
            ? <ScrollSelectBannerView cases={cases.featured} />
            : <AtActivityIndicator mode='center' content='加载中...' />
          }
        </View>

        <View className="section product-view">
          <SubHeader text="产品中心"/>
          {loading.effects['product/fetchFeatured'] === false
            ? <ScrollSelectBannerView cases={product.featured}/>
            : <AtActivityIndicator mode='center' content='加载中...' />
          }
        </View>

        {home.about_us.map((i, index) => (
          <View className="section about-us-view" key={`about-us-${index}`}>
            <SubHeader text={i.short_description}/>
            <Image src={i.image_url} mode="widthFix"/>
          </View>
        ))}

        <View className="section contact-view">
          <SubHeader text="联系我们"/>
          <ContactDialog/>
        </View>

        <View className="bottom-padding-view"/>
      </View>
    );
  }
}

export default Index;
