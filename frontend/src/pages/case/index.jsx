import Taro, {Component} from "@tarojs/taro";
import {Image, View} from "@tarojs/components";
import {connect} from "@tarojs/redux";
import {AtTabs, AtTabsPane, AtNavBar, AtPagination, AtActivityIndicator} from "taro-ui";

import "./case.scss";


@connect(({cases, api_config, loading}) => ({
  cases,
  api_config,
  loading
}))
class CasePage extends Component {

  config = {
    navigationBarTitleText: '案例'
  }

  componentWillMount() {
  }

  componentDidMount = () => {
    this.props.dispatch({
      type: "cases/fetchCategories"
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
      type: "cases/select",
      payload: value
    })
  }

  onPageChange(value) {
    const {current} = value;
    console.log("<<<<<<onPageChange>>>>>>>", value);
    this.props.dispatch({
      type: "cases/fetchCases",
      payload: {
        page: current
      }
    })
  }

  render() {
    const {cases, api_config, loading} = this.props;
    const current = cases.selected >= 0 ? cases.cases[cases.categories[cases.selected].id] : undefined;
    console.log(cases.cases, current);
    console.log(loading.effects['cases/fetchCases']);
    return (
      <View>
        <AtTabs current={cases.selected} tabList={cases.categories} onClick={this.handleClick.bind(this)}
          scroll={cases.categories && cases.categories.length > 4}
        >
          {cases.categories.map((category, index) => (
            <AtTabsPane current={cases.selected} index={index} >
          {loading.effects['cases/fetchCases']
            ? <AtActivityIndicator mode='center' content='加载中...' />
            : <View>
            <View className='at-row at-row--wrap, cases-categories-view'>
            {current.results.map(c =>
              <View className='at-col at-col-12 cases-card-view'>
                <Image
                  className='cases-card-view__img'
                  src={c.cover.image_url}
                  model='aspectFit'
                />
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
                : <View />
            }
            </View>
          }
            </AtTabsPane>
            ))}
        </AtTabs>

      </View>

    )
  }
}

export default CasePage;
