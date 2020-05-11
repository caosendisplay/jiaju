import Taro, {Component} from "@tarojs/taro";
import {Image, View} from "@tarojs/components";
import {AtActivityIndicator, AtButton} from "taro-ui";
import {connect} from "@tarojs/redux";

import "./index.scss";
import Banner from "../../components/Banner";
import SubHeader from "../../components/SubHeader";


@connect(({cases, loading}) => ({
  cases,
  loading
}))
class CaseDetailPage extends Component {

  config = {
    navigationBarTitleText: '案例详情'
  }

  componentWillMount() {
  }

  componentDidMount = () => {
    this.props.dispatch({
      type: "cases/fetchCaseDetail",
      payload: {
        case_id: this.$router.params.id
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
    if (loading.effects['cases/fetchCaseDetail']) {
      return (
        <AtActivityIndicator mode='center' content='加载中...'/>
      )
    }
    const {current_case} = this.props.cases;
    return (
      <View className='case-detail-view at-row--wrap'>
        <View className='at-col at-col-12'>
          <Banner images={current_case.images} name="case-detail"/>
        </View>
        <View className='at-col at-col--wrap at-col-12 case-detail-view__short_description'>
          <AtButton className='case-detail-view__short_description__button' type='primary' size='small'
                    onClick={() => Taro.navigateTo({url: `/pages/contact/index?name=${current_case.name}`})}
          >
            立即咨询
          </AtButton>
          <View className='at-article'>
            <View className='at-article__content'>
              <View className='at-article__section'>
                <View className='at-article__h2'>
                  {current_case.name}
                </View>
                <View className='at-article__p'>
                  {current_case.short_description ? current_case.short_description : ''}
                </View>
              </View>
            </View>
          </View>
        </View>
        {current_case.detailed_description ?
          <View className='at-col at-col-12'>
            <SubHeader text="详情描述"/>
          </View>
          :
          <View/>
        }
        <View className='at-col at-col-12 case-detail-view__detail_description'>
          {this.renderDetailedDescription(current_case.id, current_case.detailed_description)}
        </View>
      </View>
    )
  }
}

export default CaseDetailPage;
