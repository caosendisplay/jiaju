import Taro, { Component } from "@tarojs/taro";
import { Image, ScrollView, Text, View } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";
import PropTypes from 'prop-types';
import Banner from "../Banner";

import "./index.scss";

export default class ScrollSelectBannerView extends Component {
  static propTypes = {
    cases: PropTypes.array,
  };

  static defaultProps = {
    cases: [],
  };

  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  handleClick(i) {
    this.setState({
      current: i
    })
  }

  render() {
    const { cases } = this.props;
    return (
      <View className="scroll-select-banner-view">
        <AtTabs
          current={this.state.current}
          scroll={cases.length > 4}
          tabList={cases}
          onClick={this.handleClick.bind(this)}
        >
          {cases.map((c, index) => (
            // TODO: put description on top of images.
            <AtTabsPane current={this.state.current} index={index}>
              <Banner images={c.images} name="case" />
            </AtTabsPane>
          ))}
        </AtTabs>
      </View>
    );
  }
}
