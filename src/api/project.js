import request from '@/utils/request'

export function getProjectData(params) {
  return request({
    url: '/projectView/info',
    method: 'get',
    params
  })
}
