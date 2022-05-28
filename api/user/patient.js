import request from '@/utils/request'

const api_name = `/api/user/patient`

export default {
  //获取列表
  findList() {
    return request({
      url: `${api_name}/auth/findAll`,
      method: `get`
    })
  },
  //获取就诊人
  getById(id) {
    return request({
      url: `${api_name}/auth/get/${id}`,
      method: 'get'
    })
  },
  //新增就诊人
  save(patient) {
    return request({
      url: `${api_name}/auth/save`,
      method: 'post',
      data: patient
    })
  },
  //修改就诊人
  updateById(patient) {
    return request({
      url: `${api_name}/auth/update`,
      method: 'put',
      data: patient
    })
  },
  //删除就诊人
  removeById(id) {
    return request({
      url: `${api_name}/auth/remove/${id}`,
      method: 'delete'
    })
  }
}
