import React, {useState} from "react";
import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components';
import Taro, { useRouter, useDidShow } from '@tarojs/taro';
import {getGoodsInfoApi} from '../../../../service/goods';
import './index.less'
import {RES_STATUS} from '../../../../utils/code';
import {previewImgUrl} from '../../../../utils';

export default function GoodsInfo(props) {
  const router = useRouter();
  const [info, setInfo] = useState({});
  useDidShow(() => {
    getGoodsInfoApi({
      id: router.params.id
    }).then(res => {
      if (res.code === RES_STATUS.SUCCESS_CODE) {
        setInfo(res.datas);
      }
    });
  });
  return (
    <View className='goods-info-container'>
      <Swiper
        className='swiper-box'
        indicatorColor='#ccc'
        indicatorActiveColor='#f40'
        circular
        indicatorDots
        autoplay
      >
        {
          (info.carouselSource || []).map(item => {
            return (
              <SwiperItem>
                <Image className='swiper-img' src={previewImgUrl + item.newFileName} />
              </SwiperItem>
            )
          })
        }
      </Swiper>
      <View className='price flex-between'>
        <View className='sell-price'>
          ￥{info.sellPriceStart}
          {
            info.sellPriceEnd && <Text>-{info.sellPriceEnd}</Text>
          }
          <Text className='origin-price'>￥{info.originPrice}</Text>
        </View>
        <View className='sold-count'>{info.sellCount}人买过</View>
      </View>
    </View>
  )
}
