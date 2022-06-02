import request from '@/utils/request'

const api_name = `/api/user`

export default {
  //会员登录
  login(userInfo) {
    return request({
      url: `${api_name}/login`,
      method: `post`,
      data: userInfo
    })
  },
  //获取会员信息
  getUserInfo() {
    return request({
      url: `${api_name}/auth/getUserInfo`,
      method: `get`
    })
  },
  //会员认证
  saveUserAuth(userAuth) {
    return request({
      url: `${api_name}/auth/userAuth`,
      method: 'post',
      data: userAuth
    })
  }
}
