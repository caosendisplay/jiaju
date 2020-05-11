import Taro, {Component} from "@tarojs/taro";
import {Image, View} from "@tarojs/components";
import {AtActivityIndicator, AtButton} from "taro-ui";
import {connect} from "@tarojs/redux";

import Banner from "../../components/Banner";
import SubHeader from "../../components/SubHeader";

import "./index.scss";


@connect(({product, loading}) => ({
  product,
  loading
}))
class CaseDetailPage extends Component {
  config = {
    navigationBarTitleText: '产品详情'
  }

  componentWillMount() {}

  componentDidMount = () => {
    this.props.dispatch({
      type: "product/fetchProductDetail",
      payload: {
        product_id: this.$router.params.id
      }
    })
  };

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  renderContent(content) {
    if (content.type === 'h1') {
      return <View className='at-article__h1'>{content.detail}</View>
    } else if (content.type === 'h2') {
      return <View className='at-article__h2'>{content.detail}</View>
    } else if (content.type === 'h3') {
      return <View className='at-article__h3'>{content.detail}</View>
    } else if (content.type === 'paragraph') {
      return <View className='at-article__p'>{content.detail}</View>
    } else if (content.type === 'info') {
      return <View className='at-article__info'>{content.detail}</View>
    } else if (content.type === 'img') {
      return <Image className='at-article__img' src={content.detail} mode='widthFix'/>
    } else {
      return;
    }
  }

  renderDetailedDescription(case_id, detailed_description) {
    if (!detailed_description) return;
    return (
      <View className='at-article'>
        <View className='at-article__content'>
          {detailed_description.sections.map((section, idx) => (
            <View className='at-article__section' key={`${case_id}-description-section-${idx}`}>
              {section.contents.map((content) => this.renderContent(content))}
            </View>
          ))}
        </View>
      </View>
    )
  }

  render() {
    const {loading} = this.props;
    if (loading.effects['product/fetchProductDetail']) {
      return (
        <AtActivityIndicator mode='center' content='加载中...'/>
      )
    }
    const {current_product} = this.props.product;
    return (
      <View className='product-detail-view at-row--wrap'>
        <View className='at-col at-col-12'>
          <Banner images={current_product.images} name="product-detail"/>
        </View>
        <View className='at-col at-col--wrap at-col-12 product-detail-view__short_description'>
          <AtButton className='product-detail-view__short_description__button' type='primary' size='small'
                    onClick={() => Taro.navigateTo({url: `/pages/contact/index?name=${current_product.name}`})}
          >
            立即咨询
          </AtButton>
          <View className='at-article'>
            <View className='at-article__content'>
              <View className='at-article__section'>
                <View className='at-article__h2'>
                  {current_product.name}
                </View>
                <View className='at-article__p'>
                  {current_product.short_description ? current_product.short_description : ''}
                </View>
              </View>
            </View>
          </View>
        </View>
        {current_product.detailed_description ?
          <View className='at-col at-col-12'>
            <SubHeader text="详情描述"/>
          </View>
          :
          <View/>
        }
        <View className='at-col at-col-12'>
          {this.renderDetailedDescription(current_product.id, current_product.detailed_description)}
        </View>
      </View>
    )
  }
}

export default CaseDetailPage;
