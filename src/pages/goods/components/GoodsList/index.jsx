import React from 'react';
import {Image, View, Text} from '@tarojs/components';
import { previewImgUrl } from '../../../../utils';
import Taro from '@tarojs/taro';
import './index.less';

export default function GoodsList(props) {
  const { list } = props;
  return (
    <View className='goods-list-container' style='height: 500px'>
      <View className='at-row at-row__justify--between at-row--wrap'>
        {
          list.map(item => {
            return (
              <View className='at-col at-col-6'>
                <View className='goods-item'>
                  <View className='img-box'>
                    <Image className='img' src={previewImgUrl + item.source.newFileName} />
                  </View>
                  <View className='title text-over'>{item.title}</View>
                  <View className='flex-between'>
                    <Text className='price'>￥{item.sellPriceStart}</Text>
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
