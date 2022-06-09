import request from '@/utils/request'

const api_name = `/api/user/weixin`

export default {
  //获取微信登录参数
  getLoginParam() {
    return request({
      url: `${api_name}/getLoginParam`,
      method: `get`
    })
  }
}
