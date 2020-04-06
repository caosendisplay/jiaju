import Taro, { Component } from '@tarojs/taro';
import {Button, Form, Input, Textarea, View} from '@tarojs/components';
import PropTypes from 'prop-types';
import './index.scss';

export default class ContactDialog extends Component {
  static propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    description: PropTypes.string
  };

  static defaultProps = {
    name: '',
    phone: '',
    description: '',
  };

  formSubmit = e => {
    console.log(e)
  };

  formReset = e => {
    console.log(e)
  };

  render () {
    return (
        <Form onSubmit={this.formSubmit} onReset={this.formReset} className='contact-form' >
          <View className="contact-form-view">
          <Input className='contact-form-input' type='text' placeholder='请输入姓名' focus />
          <Input className='contact-form-input' type='number' placeholder='请输入电话' />
          <Textarea className='contact-form-description' placeholder='请输入您的需求' />
          <Button className='contact-form-submit' type='primary'>立即联系</Button>
          </View>
        </Form>
  )
  }
}
