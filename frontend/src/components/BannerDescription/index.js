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
        id: "banner-description-year",
        image_url: null,
        short_description: "██",
        description: "████████"
      },
      {
        id: "banner-description-space",
        image_url: null,
        short_description: "██",
        description: "████████"
      },
      {
        id: "banner-description-team",
        image_url: null,
        short_description: "██",
        description: "████████"
      },
      {
        id: "banner-description-revenue",
        image_url: null,
        short_description: "██",
        description: "████████"
      }
    ],
  };

  render() {
    const { texts } = this.props;
    return (
      <View className="banner-description nav-list">
        {texts.map((item, index) => (
          <View className="nav-item-container" >
            {index > 0 ? <View className="nav-bar" /> : "" }
            <View className="nav-item" key={item.id}>
              <Text className="nav-text">
                {item.short_description}
              </Text>
              <Text className="nav-text">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
