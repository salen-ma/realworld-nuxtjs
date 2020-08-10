import { request } from '@/plugins/request'

// 获取用户信息
export const getProfile = (username) => {
  return request({
    method: 'GET',
    url: `/api/profiles/${username}`
  })
}
