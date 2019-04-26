import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()


export default{
  config: {
    pages: [],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor:'"#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      "color": "#999",
      "backgroundColor": "#fafafa",
      "selectedColor": "#333",
      "borderStyle": "white",
  
      list: [{
        text: '自选',
        pagePath: 'pages/index/main',
        iconPath: 'static/tabs/zxg.png',
        selectedIconPath: 'static/tabs/zxg_1.png'
      }, {
        text: '行情',
        pagePath: 'pages/information/main',
        iconPath: 'static/tabs/hq.png',
        selectedIconPath: 'static/tabs/hq_1.png',
      }, {
        text: '资讯',
        pagePath: 'pages/otherInfo/main',
        iconPath: 'static/tabs/zx.png',
        selectedIconPath: 'static/tabs/zx_1.png',
      }, {
        text: '我的',
        pagePath: 'pages/account/main',
        iconPath: 'static/tabs/yh.png',
        selectedIconPath: 'static/tabs/yh_1.png',
      }],
      position: 'bottom',
    },
    usingComponents: {
      "van-notify": "path/to/vant-weapp/dist/notify/index"
    }
  }  
}