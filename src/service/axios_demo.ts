import axios from 'axios'

// axios的实例对象
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res.data)
// })

axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000

axios
  .get('/get', {
    params: {
      name: 'boziage'
    }
  })
  .then((res) => {
    console.log(res.data)
  })

axios
  .post('/post', {
    params: {
      name: 'bozi',
      age: '18'
    }
  })
  .then((res) => {
    console.log(res.data)
  })

// promise本身是可以有类型的（32）

// axios.all -> promise.all

// axios拦截器
// fn1: 请求发送成功会执行的函数
// fn2: 请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    // 想做的操作，如loading动画，添加token
    return config
  },
  (err) => {
    console.log('请求发送错误')
    return err
  }
)

// 1.数据响应成功（服务器正常返回数据 20x）
axios.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    console.log('服务器响应失败')

    return err
  }
)
