import axios from 'axios'

function checkCode(response = {}) {
  return response
}

axios.defaults.withCredentials = true
axios.interceptors.request.use(config => config, error => Promise.reject(error))
axios.interceptors.response.use(response => checkCode(response), err => {
  console.log(err)
})

export default {
  post(url, data) {
    return axios({
      method: 'post',
      url,
      data
    })
  },
  put(url, data) {
    return axios({
      method: 'put',
      url,
      data
    })
  },
  get(url, params, headers) {
    return axios({
      method: 'get',
      url,
      headers: headers || {},
      params,
      data: {}
    })
  },
  delete(url, params) {
    return axios({
      method: 'delete',
      url,
      params
    })
  }
}