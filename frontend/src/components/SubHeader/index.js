import Taro, { Component } from '@tarojs/taro';
import { Text, View} from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

export default class SubHeader extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {
    text: '',
  };


  render () {
    return (
      <View className="sub-header">
        <Text className="sub-header-text">{this.props.text}</Text>
      </View>
  )
  }
}
