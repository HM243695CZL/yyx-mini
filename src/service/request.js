import Taro from '@tarojs/taro'
const baseUrl = 'http://192.168.2.197:3001';
export const request = ({url, method, data}) => {

  return new Promise(((resolve, reject) => {
    Taro.showLoading({
      title: '正在加载...'
    });
    Taro.request({
      url: baseUrl + url,
      method,
      data,
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        Taro.hideLoading();
        resolve(res.data)
      },
      fail: err => {
        Taro.hideLoading();
        Taro.showToast({
          title: err.errMsg,
          icon: 'error',
          duration: 3000
        });
        reject(`${url}接口出错了`);
      }
    })
  }))
};
