import Taro, { Component } from '@tarojs/taro';
import {ScrollView, Text, View} from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

export default class HorizontalScrollHeader extends Component {
  static propTypes = {
    headers: PropTypes.array
  };

  static defaultProps = {
    headers: [],
  };

  onScroll(e){
    console.log(e.detail)
  }

  render () {
    return (
      <ScrollView
        className='horizontal-scroll-header'
        scrollX
        scrollWithAnimation
        onScroll={this.onScroll}
      >
        {this.props.headers.map((header) => (
          <View className='horizontal-scroll-container' key={header.id}>
            <Text className='horizontal-scroll-item'>
              {header.title}
            </Text>
          </View>
        ))}
      </ScrollView>
  )
  }
}
