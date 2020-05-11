import Taro, {Component} from "@tarojs/taro";
import {Image, Text, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import {AtTabs, AtTabsPane, AtPagination, AtActivityIndicator} from "taro-ui";

import "./index.scss";


@connect(({product, api_config, loading}) => ({
  product,
  api_config,
  loading
}))
class CasePage extends Component {

  config = {
    navigationBarTitleText: '产品'
  }

  componentWillMount() {
  }

  componentDidMount = () => {
    this.props.dispatch({
      type: "product/fetchCategories"
    });
  };

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  handleClick(value) {
    this.props.dispatch({
      type: "product/select",
      payload: value
    })
  }

  onPageChange(value) {
    const {current} = value;
    this.props.dispatch({
      type: "product/fetchProducts",
      payload: {
        page: current
      }
    })
  }

  render() {
    const {product, api_config, loading} = this.props;
    if (loading.effects['product/fetchProducts']) {
      return <AtActivityIndicator mode='center' content='加载中...'/>
    }
    const current = product.selected >= 0 ? product.products[product.categories[product.selected].id] : undefined;
    return (
      <View>
        <AtTabs current={product.selected} tabList={product.categories} onClick={this.handleClick.bind(this)}
                scroll={product.categories && product.categories.length > 6}
        >
          {product.categories.map((category, index) => (
            <AtTabsPane current={product.selected} index={index}>
              {loading.effects['product/fetchProducts']
                ? <AtActivityIndicator mode='center' content='加载中...'/>
                : <View>
                  <View className='at-row at-row--wrap, product-categories-view'>
                    {current.results.map(c =>
                      <View className='at-col at-col-12 product-card-view'
                            onClick={() => Taro.navigateTo({url: `/pages/productDetail/index?id=${c.id}`})}>
                        <Image
                          className='product-card-view__img'
                          src={c.cover.image_url}
                          model='aspectFit'

                        />
                        <View className='product-card-view__box'>
                          <Text className='product-card-view__box__name'>{c.name}</Text>
                        </View>
                      </View>
                    )}
                  </View>
                  {
                    current && (current.next || current.previous)
                      ? <AtPagination
                        total={current.count}
                        current={current.page}
                        pageSize={api_config.page_size ? api_config.page_size : current.result.length}
                        onPageChange={this.onPageChange.bind(this)}
                      />
                      : <View/>
                  }
                </View>
              }
            </AtTabsPane>
          ))}
        </AtTabs>
        <View className="bottom-padding-view"/>
      </View>

    )
  }
}

export default CasePage;
