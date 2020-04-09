import Taro, { Component } from '@tarojs/taro';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

export default class Banner extends Component {
  static propTypes = {
    images: PropTypes.array,
    name: PropTypes.string,
  };

  static defaultProps = {
    images: [],
    name: '',
  };

  render() {
    const { images, name } = this.props;
    return (
      <Swiper
        className={`swiper-${name}`}
        circular
        indicatorDots
        indicatorColor='#999'
        indicatorActiveColor='#bf708f'
        autoplay
      >
        {
          images.map((item, index) => (
            <SwiperItem key={index}>
              <Image mode='widthFix' src={`${item.image_url}`} />
            </SwiperItem>
          ))
        }
      </Swiper>
    );
  }
}
