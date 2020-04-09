import Taro, { Component } from '@tarojs/taro';
import { Text, View } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

export default class BannerDescription extends Component {
  static propTypes = {
    texts: PropTypes.array,
  };

  static defaultProps = {
    texts: [
      {
        index: "banner-description-year",
        line1: "30年",
        line2: "asdkljasd"
      },
      {
        index: "banner-description-space",
        line1: "45000m²",
        line2: "sdlkjadlkajs"
      },
      {
        index: "banner-description-team",
        line1: "500+",
        line2: "asdlhasjhd"
      },
      {
        index: "banner-description-revenue",
        line1: "1.5亿",
        line2: "asdakqwh"
      }
    ],
  };

  render() {
    const { texts } = this.props;
    return (
      <View className="banner-description at-row">
        {texts.map((item) => (
          <View className="banner-description__item at-col at-col-3 at-row" key={item.index}>
            <Text className="banner-description__text at-col at-col-12">
              {item.line1}
            </Text>
            <Text className="banner-description__text at-col at-col-12">
              {item.line2}
            </Text>
          </View>
        ))}
      </View>
    );
  }
}
