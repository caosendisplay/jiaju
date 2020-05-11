import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import {connect} from "@tarojs/redux";
import { AtForm, AtInput, AtTextarea, AtButton } from "taro-ui";
import { validatePhone } from "../../utils/validation";

import "./index.scss";


@connect(({message}) => ({
  message,
}))
class ContactDialog extends Component {
  handleChange = (name, value) => {
    console.log(name, value);
    this.props.dispatch({
      type: 'message/save',
      payload: { [name]: value }
    });
  };

  formSubmit = () => {
    const { message } = this.props;
    if (message.name.length <= 0) {
      Taro.showToast({
        title: `姓名是必填项`,
        icon: 'none',
        status: 'error',
        mask: true,
      });
      return;
    }
    if (message.phone.length <= 0) {
      Taro.showToast({
        title: `电话是必填项`,
        icon: 'none',
        status: 'error',
        mask: true,
      });
      return;
    }
    if (!validatePhone(message.phone)) {
      Taro.showToast({
        title: `手机格式错误`,
        icon: 'none',
        status: 'error',
        mask: true,
      });
      return;
    }
    this.props.dispatch({
      type: 'message/add'
    })
  };

  formReset = () => {
    this.props.dispatch({
      type: 'message/save',
      payload: {
        name: "",
        phone: "",
        body: ""
      }
    })
  };

  render() {
    const { message } = this.props;
    return (
      <View className="contact-form">
        <AtForm
          onSubmit={this.formSubmit.bind(this)}
          onReset={this.formReset.bind(this)}
        >
          <AtInput
            required
            name="name"
            title="姓名"
            type="text"
            placeholder="请输入姓名"
            value={message.name}
            onChange={this.handleChange.bind(this, "name")}
          />
          <AtInput
            required
            error={!validatePhone(message.phone)}
            name="phone"
            title="电话"
            type="phone"
            placeholder="请输入电话"
            value={message.phone}
            onChange={this.handleChange.bind(this, "phone")}
          />
          <AtTextarea
            placeholder="您的需求是...?"
            value={message.body}
            onChange={this.handleChange.bind(this, "body")}
          />
          <AtButton className="contact-form-submit" formType="submit" type='primary'>
            立即联系
          </AtButton>
        </AtForm>
      </View>
    );
  }
}

export default ContactDialog;
