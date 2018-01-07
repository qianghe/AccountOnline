import React, { Component } from 'react';
import CryptoJS from 'crypto-js';
import {
  Sunny, Cloudy, Rainy, Flurries, ThunderStorm,
} from '@components/Common/WeatherIcon';
import { dispatchJsonp } from '@lib/fetchDispatch';
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: -1,
      text: '',
    };
  }
  componentWillMount() {
    const UID = 'U3BF21C60F'; // 测试用 用户ID，请更换成您自己的用户ID
    const KEY = 'mv2k75x6l3dmbkkt'; // 测试用key，请更换成您自己的 Key
    const API = 'http://api.seniverse.com/v3/weather/now.json'; // 获取天气实况
    const LOCATION = 'beijing'; // 除拼音外，还可以使用 v3 id、汉语等形式
    // 获取当前时间戳
    const ts = Math.floor((new Date()).getTime() / 1000);
    // 构造验证参数字符串
    const str = `ts=${ts}&uid=${UID}`;
    // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
    // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
    const sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
    const requestUrl = `${API}?location=${LOCATION}&${str}&sig=${encodeURIComponent(sig)}`;

    dispatchJsonp(requestUrl).then(data => {
      if (data.results && data.results.length) {
        const { now } = data.results[0];
        this.setState({
          code: now.code || 0,
          text: now.text || '未知',
        });
      }
    });
  }
  renderWeatherIcon = () => {
    const code = parseInt(this.state.code, 10);
    let icon = null;
    if (code < 0) return '';
    switch (true) {
      case code >= 0 && code <= 3:
        icon = <Sunny />;
        break;
      case code >= 4 && code <= 9:
        icon = <Cloudy />;
        break;
      case code >= 10 && code <= 20:
        icon = <Rainy />;
        break;
      case code >= 21 && code <= 25:
        icon = <Flurries />;
        break;
      default:
        icon = <ThunderStorm />;
    }
    return icon;
  }
  render() {
    return (
      <div>
        <div className="home-header">
          <div>
            <h1>我的记账簿</h1>
            <span className="home-header-info">
              今天的天气为{this.state.text}，您的心情如何呢？
            </span>
          </div>
          <div>
            {this.renderWeatherIcon()}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
