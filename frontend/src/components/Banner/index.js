import Taro, {Component} from '@tarojs/taro';
import {Swiper, SwiperItem, Image, View} from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
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
    const query = Taro.createSelectorQuery().in(this.$scope);
    query
      .select('.swiper-container__img')
      .boundingClientRect(n => {
        const newHeight = e.detail.height / e.detail.width * n.width;
        this.setState((state) => {
          console.log(e, n, newHeight, state.height);
          return {
            ...state,
            height: state.height > 0 ? Math.min(state.height, newHeight) : newHeight
          }
        });
      })
      .exec();
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
        autoplay={images.length > 1}
        style={{height: this.state.height+'px'}}
      >
        {
          images.map((item) => (
            <SwiperItem key={item.id}>
              <View className='swiper-container__box'>
                <Image mode='widthFix' className='swiper-container__img' src={`${item.image_url}`}
                       onLoad={this.onImageLoad.bind(this)}/>
              </View>
            </SwiperItem>
          ))
        }
      </Swiper>
    );
  }
}
