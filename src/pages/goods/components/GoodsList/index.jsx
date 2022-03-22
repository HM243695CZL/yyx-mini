import React from 'react';
import {Image, View, Text} from '@tarojs/components';
import { previewImgUrl } from '../../../../utils';
import Taro from '@tarojs/taro';
import './index.less';

export default function GoodsList(props) {
  const { list } = props;
  const info = Taro.getSystemInfoSync();
  const clickGoods = data => {
    Taro.navigateTo({
      url: '/pages/goods/pages/goodsInfo/index?id=' + data.id
    })
  };
  return (
    <View className='goods-list-container' style={{
      height: (info.windowHeight - 45) + 'px'
    }}>
      <View className='at-row at-row__justify--between at-row--wrap'>
        {
          list.map(item => {
            return (
              <View className='at-col at-col-6'>
                <View className='goods-item' onClick={e => clickGoods(item)}>
                  <View className='img-box'>
                    <Image className='img' src={previewImgUrl + item.source.newFileName} />
                  </View>
                  <View className='title text-over'>{item.title}</View>
                  <View className='flex-between'>
                    <Text className='price'>￥{item.originPrice}</Text>
                    <Text className='sell'>{item.sellCount}人买过</Text>
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}
