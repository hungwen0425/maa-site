import request from '@/utils/request'

const api_name = `/api/order/orderInfo`

export default {
  //生成訂單
  submitOrder(scheduleId, patientId) {
    return request({
      url: `${api_name}/auth/submitOrder/${scheduleId}/${patientId}`,
      method: 'post'
    })
  },
  //获取分页订单列表
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/auth/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  //获取订单状态
  getStatusList() {
    return request({
      url: `${api_name}/auth/getStatusList`,
      method: 'get'
    })
  },
  //订单詳情
  getOrderInfo(orderId) {
    return request({
      url: `${api_name}/auth/getOrderInfo/${orderId}`,
      method: 'get'
    })
  },
  //取消訂單
  cancelOrder(orderId) {
    return request({
      url: `${api_name}/auth/cancelOrder/${orderId}`,
      method: 'get'
    })
  }
}
