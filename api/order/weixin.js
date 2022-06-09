import request from '@/utils/request'

const api_name = `/api/order/weixin`

export default {
  //生成二维码
  createNative(orderId) {
    return request({
      url: `${api_name}/createNative/${orderId}`,
      method: 'get'
    })
  },
  //查詢支付狀態
  queryPayStatus(orderId) {
    return request({
      url: `${api_name}/queryPayStatus/${orderId}`,
      method: 'get'
    })
  }
}
