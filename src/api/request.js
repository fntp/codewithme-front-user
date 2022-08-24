/**
 * @format CodeWithMe-front-user
 * @author fntp
 * @description coded by fntp
 * @Date 2022-08-08 base-project
 */
// 导入模块部分
// 引入qs模块，用来序列化post类型的数据
import axios from 'axios'
import { load } from '@/utils/loading'
import router from '../router'
import QS from 'qs'
import { getStore, removeStore } from '@/utils/localStore'

// （1）封装第一步：{URL地址封装}
// 请求前封装： Axios的baseUrl地址封装
// 环境的切换(暂时改用本地代理跨域,以下代码暂时不启用)
if (process.env.NODE_ENV === 'development') {
  // axios.defaults.baseURL可以设置axios的默认请求地址
  //视情况而定吧，我这里把情况分类了，但实际上没有必要，我是为了后续的扩展做一定准备
  axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
}

// （2）封装第二步：{请求超时时间封装设置}
// 请求超时时间
axios.defaults.timeout = 10000

// （3）封装第三步：{请求headers设置}
// post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// （4）封装第四步：{请求拦截器}
// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    console.log('请求拦截器')
    // 显示loading
    load.show()
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    const token = getStore({ name: 'access_token', type: 'string' })
    console.log(token)
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    // 隐藏loading
    load.hide()
    return Promise.error(error)
  }
)

// （5）封装第五步：{响应拦截器}
// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    console.log('响应拦截器')
    // 隐藏loading
    load.hide()
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    // 隐藏loading
    load.hide()
    // 服务器状态码不是200的情况
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        case 401:
          alert('未登录')
          // 清除token
          removeStore({ name: 'access_token' })
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath,
            },
          })
          break
        // 403 token过期
        case 403:
          alert('登录过期，请重新登录')
          // 清除token
          removeStore({ name: 'access_token' })
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath,
              },
            })
          }, 1000)
          break
        // 其他错误：{500,405,406,503,502,501}等等错误代码，直接抛出错误提示
        default:
          alert(error.response.data.message)
          break
      }
    }
    // 抛出错误提示
    // Vue.prototype.$message.error(error.response.data.message)
    return Promise.reject(error)
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function get(url, paramsMap) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, paramsMap)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(params))
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

/**
 * put方法， 对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function put(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, QS.stringify(params))
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

/**
 * del方法， 对应delete请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function del(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, QS.stringify({ data: params }))
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

/**
 * 导出工具方法
 * Restful风格的请求方式
 */
export default {
  /**
   * 封装的get请求
   */
  get,
  /**
   * 封装的post请求
   */
  post,
  /**
   * 封装的put请求
   */
  put,
  /**
   * 封装的del请求
   */
  del,
}
