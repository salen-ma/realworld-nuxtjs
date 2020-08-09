import axios from 'axios'
const cookieparser = process.server ? require('cookieparser') : undefined

export const request =  axios.create({
  baseURL: 'https://conduit.productionready.io'
})

export default function ({ req, store }) {
  let { user } = store.state
  if (!user && req.headers.cookie) {
    const parsed = cookieparser.parse(req.headers.cookie)
    try {
      user = JSON.parse(parsed.user)
    } catch (err) {}
  }

  request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
}
