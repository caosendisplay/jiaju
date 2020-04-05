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
      <View className="nav-list">
        {texts.map((item) => (
          <View className="nav-item" key={item.index}>
            <Text>{item.line1}</Text>
            <Text>{item.line2}</Text>
          </View>
        ))}
      </View>
    );
  }
}
