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
        short_description: "30年",
        description: "asdkljasd"
      },
      {
        id: "banner-description-space",
        image_url: null,
        short_description: "45000m²",
        description: "sdlkjadlkajs"
      },
      {
        id: "banner-description-team",
        image_url: null,
        short_description: "500+",
        description: "asdlhasjhd"
      },
      {
        id: "banner-description-revenue",
        image_url: null,
        short_description: "1.5亿",
        description: "asdakqwh"
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
              <Text className="banner-description__text">
                {item.short_description}
              </Text>
              <Text className="banner-description__text">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
