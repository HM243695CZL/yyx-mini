import {request} from './request';

export function getGoodsPageApi(data) {
  return request(({
    url: '/goods/page',
    method: 'POST',
    data
  }))
}

export function getGoodsInfoApi(data) {
  return request({
    url: '/goods/view',
    method: 'GET',
    data
  })
}

export function getGoodsTypeListApi(data) {
  return request(({
    url: '/goods-type/list',
    method: 'GET',
    data
  }))
}
