import React, { useState, useEffect } from "react";
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import GoodsList from '../goods/components/GoodsList';
import {getGoodsPageApi} from '../../service/goods';
import { FilterEnum, PageEntity, RES_STATUS} from '../../utils/code';
import {PaginationUtils} from '../../utils/PaginationUtils';
import './index.less'

export default function Index(props) {
  const [current, setCurrent] = useState(0);
  const [pageInfo, setPageInfo] = useState(PageEntity);
  const [list, setList] = useState([]);
  const [tabList] = useState([
    { title: '默认' },
    { title: '新品' },
    { title: '销量' },
    { title: '价格' },
  ]);
  const getDataList = pageInfo => {
    pageInfo.filters['status'] = PaginationUtils.filters(1, FilterEnum.EQUALS);
    getGoodsPageApi(pageInfo).then(res => {
      if (res.code === RES_STATUS.SUCCESS_CODE) {
        setList(res.datas.data);
      }
    })
  };
  const changeTab = index => {
    if (current === index) return false;
    setCurrent(index);
  };
  useEffect(() => {
    getDataList(pageInfo);
  }, []);
  return (
    <View className='index-container'>
      <AtTabs current={current} tabList={tabList} onClick={changeTab}>
        <AtTabsPane current={current} index={0} >
          <GoodsList list={list} />
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}
