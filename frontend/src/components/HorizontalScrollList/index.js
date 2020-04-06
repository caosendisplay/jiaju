import Taro, { Component } from '@tarojs/taro';
import {Image, ScrollView, Text, View} from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

export default class HorizontalScrollList extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  static defaultProps = {
    items: [],
  };

  onScroll(e){
    console.log(e.detail)
  }

  render () {
    return (
      <ScrollView
        className='horizontal-scroll-list'
        scrollX
        scrollWithAnimation
        onScroll={this.onScroll}
      >
        {this.props.items.map((item) => (
          <View className='horizontal-scroll-list-container' key={item.id}>
            <View className='horizontal-scroll-list-item'>
              <Image
                className='horizontal-scroll-list-image'
                mode='widthFix'
                src={`${item.image_url}`}
              />
              <Text className='horizontal-scroll-list-title'>
                {item.title}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
  )
  }
}
