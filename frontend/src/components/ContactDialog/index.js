import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtForm, AtInput, AtTextarea, AtButton } from "taro-ui";

import "./index.scss";

export default class ContactDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      description: ""
    };
  }
  handleChange = (name, value) => {
    console.log(name, value);
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    console.log(e);
  };

  formReset = e => {
    console.log(e);
  };

  render() {
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
            value={this.state.name}
            onChange={this.handleChange.bind(this, "name")}
          />
          <AtInput
            required
            name="phone"
            title="电话"
            type="phone"
            placeholder="请输入电话"
            value={this.state.phone}
            onChange={this.handleChange.bind(this, "phone")}
          />
          <AtTextarea
            placeholder="您的需求是...?"
            value={this.state.description}
            onChange={this.handleChange.bind(this, "description")}
          />
          <AtButton className="contact-form-submit" formType="submit" type='primary'>
            立即联系
          </AtButton>
        </AtForm>
      </View>
    );
  }
}
