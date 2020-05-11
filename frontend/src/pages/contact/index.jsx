import Taro, {Component} from "@tarojs/taro";
import {AtActivityIndicator} from "taro-ui";
import {connect} from "@tarojs/redux";
import ContactDialog from "../../components/ContactDialog";

import "./index.scss";


@connect(({message, loading}) => ({
  message,
  loading
}))
class ContactPage extends Component {
  config = {
    navigationBarTitleText: '发送消息'
  }

  componentWillMount() {
    console.log(this.$router.params);
  }

  componentDidMount = () => {
    this.props.dispatch({
      type: 'message/save',
      payload: {
        name: "",
        phone: "",
        body: `您好，我想详细了解下贵公司的${this.$router.params.name}。`
      }
    })
  };

  componentDidUpdate(prevProps) {
    if (prevProps.loading.effects['message/add'] === true) {
      Taro.navigateBack()
    }
  }

  render() {
    return (
      <ContactDialog />
    )
  }
}

export default ContactPage;
