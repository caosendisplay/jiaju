import Taro, {Component} from "@tarojs/taro";
import {Image, ScrollView, Text, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import {AtTabs, AtTabsPane, AtNavBar, AtPagination, AtActivityIndicator} from "taro-ui";

import "./index.scss";

@connect(({product, loading}) => ({
  product,
  loading
}))
class ProductPage extends Component {

  config = {
    navigationBarTitleText: '产品'
  }

  componentWillMount() {
  }

  componentDidMount = () => {
    this.props.dispatch({
      type: "product/fetchProducts"
    });
  };

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  onScrollToUpper = () => {}
  onScrollToLower = (_) => {
    this.props.dispatch({
      type: "product/fetchProducts"
    });
  }

  onScroll = (e) => {
    console.log(e.detail)
  }

  render() {
    const { product, loading } = this.props;
    const scrollTop = 0
    const Threshold = 20
    console.log(loading.effects['product/fetchProducts']);
    return (
      <ScrollView
        className='product-scroll-view at-row at-row--wrap'
        scrollY
        scrollWithAnimation
        enableFlex
        scrollTop={scrollTop}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
        onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
        onScrollToLower={this.onScrollToLower.bind(this)}
        onScroll={this.onScroll}
      >
        {
          product.products.map((p, idx) => (
            <View className='product-scroll-view__card at-col at-col-6' key={`product-scroll-card-${idx}`}>
              {p.name}
            </View>
          ))
        }
        <AtActivityIndicator className='at-col at-col-12' mode='normal' content='加载中...'/>
        {/*{*/}
        {/*  loading.effects['product/fetchProducts'] === true*/}
        {/*    ? <AtActivityIndicator mode='center' content='加载中...'/>*/}
        {/*    : <View/>*/}
        {/*}*/}
        </ScrollView>
    )
  }
}

export default ProductPage;
