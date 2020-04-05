import Taro, { Component } from '@tarojs/taro';
import { Swiper, SwiperItem, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

export default class Banner extends Component {
  static propTypes = {
    images: PropTypes.array,
    home: PropTypes.bool,
  };

  static defaultProps = {
    images: [],
    home: false,
  };

  render() {
    const { images, home } = this.props;
    return (
      <Swiper
        className={!home ? 'swiper-container' : 'swiper'}
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
