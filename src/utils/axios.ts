import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { useRouter, useRoute } from 'vue-router';
import router from '@/rotuer/index';

type Response = {
  data: { code: number; msg: string; data: any };
  status: number;
  msg: string;
};

const showStatus = (status: number, errorMessage: string) => {
  let message = '';
  switch (status) {
    case 400:
      message = '请求错误(400)';
      break;
    case 401:
      message = '未授权，请重新登录(401)';
      break;
    case 403:
      message = '拒绝访问(403)';
      break;
    case 404:
      message = '请求出错(404)';
      break;
    case 408:
      message = '请求超时(408)';
      break;
    case 500:
      message = '服务器错误(500)';
      break;
    case 501:
      message = '服务未实现(501)';
      break;
    case 502:
      message = '网络错误(502)';
      break;
    case 503:
      message = '服务不可用(503)';
      break;
    case 504:
      message = '网络超时(504)';
      break;
    case 505:
      message = 'HTTP版本不受支持(505)';
      break;
    default:
      message = `连接出错(${status})!`;
  }
  return `${message}! ${errorMessage}`;
};

const service = axios.create({
  // 联调
  url: '/',
  baseURL: 'http://192.168.71.131:4100',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'content-type',
    Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
    mode: 'cors',
  },

  // 是否跨站点访问控制请求
  // withCredentials: true,
  timeout: 30000,
  transformRequest: [
    (data) => {
      data = JSON.stringify(data);
      return data;
    },
  ],
  validateStatus() {
    // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
    return true;
  },
  transformResponse: [
    (data) => {
      if (typeof data === 'string' && data.startsWith('{')) {
        data = JSON.parse(data);
      }
      return data;
    },
  ],
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    return config;
  },
  (error) => {
    // 错误抛到业务代码
    error.data = {};
    error.data.msg = '服务器异常，请联系管理员！';
    return Promise.resolve(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<Response>): AxiosResponse<Response> => {
    // console.log(response);

    const status = response.status;
    const errorMessage = response.data.msg;
    window.$notification.error({
      title: '请求错误： ' + status,
      description: '123123123',
      duration: 10000,
    });
    if (status !== 200) {
      // 处理http错误，抛到业务代码

      const msg = showStatus(status, errorMessage);
      window.$notification.error({
        title: '请求错误： ' + status,
        description: msg,
        duration: 10000,
      });

      if (status === 401) {
        router
          .push({
            path: '/login',
            query: {
              redirect: router.currentRoute.value.fullPath,
            },
          })
          .then((r) => r);
      }

      return response;
    }
    return response;
  },
  (error) => {
    return Promise.resolve(error);
  },
);

export default service;
