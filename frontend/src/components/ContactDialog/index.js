import Taro, { Component } from "@tarojs/taro";
import { Button, Form, Input, Textarea, View } from "@tarojs/components";
import { AtForm, AtInput, AtTextarea, AtButton } from "taro-ui";
import PropTypes from "prop-types";
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
      <AtForm
        onSubmit={this.formSubmit.bind(this)}
        onReset={this.formReset.bind(this)}
        className="contact-form"
      >
        <AtInput
          className="contact-form-input"
          required
          name="name"
          title="姓名"
          type="text"
          placeholder="请输入姓名"
          value={this.state.name}
          onChange={this.handleChange.bind(this, "name")}
        />
        <AtInput
          className="contact-form-input"
          required
          name="phone"
          title="电话"
          type="phone"
          placeholder="请输入电话"
          value={this.state.phone}
          onChange={this.handleChange.bind(this, "phone")}
        />
        <AtTextarea
          className="contact-form-description"
          placeholder="您的需求是...?"
          value={this.state.description}
          onChange={this.handleChange.bind(this, "description")}
        />
        <AtButton className="contact-form-submit" formType="submit" type='primary'>
          立即联系
        </AtButton>
      </AtForm>
    );
  }
}
