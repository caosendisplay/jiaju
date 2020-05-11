import Taro, {Component} from '@tarojs/taro';
import {Swiper, SwiperItem, Image} from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {}
    }
  }
  static propTypes = {
    images: PropTypes.array,
    name: PropTypes.string,
  };

  static defaultProps = {
    images: [],
    name: '',
  };

  onImageLoad(e) {
    if (this.props.name !== 'home') return;
    const windowWidth = Taro.getSystemInfoSync().windowWidth;
    const newHeight = e.detail.height / e.detail.width * windowWidth;
    this.setState((state) => {
      return {
        ...state,
        style: {
          ...state.style,
          height: (state.style.height ? Math.min(state.style.height, newHeight) : newHeight)+'px'
        }
      }
    });
  }

  render() {
    const {images, name} = this.props;
    return (
      <Swiper
        className={`swiper-container swiper-${name}`}
        circular
        indicatorDots={images.length > 1}
        indicatorColor='#999'
        indicatorActiveColor='#bf708f'
        autoplay
        style={this.state.style}
      >
        {
          images.map((item) => (
            <SwiperItem key={item.id}>
              <Image mode='widthFix' className='swiper-container__img' src={`${item.image_url}`} onLoad={this.onImageLoad.bind(this)}/>
            </SwiperItem>
          ))
        }
      </Swiper>
    );
  }
}
