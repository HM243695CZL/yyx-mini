export default {
  pages: [
    'pages/index/index',
    'pages/category/index',
    'pages/shop/index',
    'pages/user/index',
  ],
  subpackages: [
    {
      'root': 'pages/goods',
      'pages': [
        'pages/goodsInfo/index'
      ]
    }
  ],
  tabBar: {
    color: '#000',
    selectedColor: '#ff6146',
    list: [
      {
        iconPath: 'static/img/home.png',
        selectedIconPath: 'static/img/home-select.png',
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        iconPath: 'static/img/category.png',
        selectedIconPath: 'static/img/category-select.png',
        pagePath: 'pages/category/index',
        text: '分类'
      },
      {
        iconPath: 'static/img/shop.png',
        selectedIconPath: 'static/img/shop-select.png',
        pagePath: 'pages/shop/index',
        text: '购物车'
      },
      {
        iconPath: 'static/img/user.png',
        selectedIconPath: 'static/img/user-select.png',
        pagePath: 'pages/user/index',
        text: '个人中心'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ff6146',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  }
}
