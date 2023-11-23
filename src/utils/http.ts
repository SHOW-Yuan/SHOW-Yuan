import axios from 'axios';
import decode from 'entity-decode';
import { isBoolean } from './type';

const axiosIns = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 10000
})

let CancelToken = axios.CancelToken; // 取消令牌
let requestPool = {}; // 请求池

function removeFromPool(key) {
    let cancelFn = requestPool[key];
    if (typeof cancelFn == 'function') {
        cancelFn(`Request cancelled: ${key}`);
        delete requestPool[key];
    }
}
/** 请求拦截，取消对同一地址的重复请求，只保留最后一次请求 */
axiosIns.interceptors.request.use(config => {

    if (config.cancelable) { // 如果请求可取消
        let key = `${config.method}_${config.url}`;
        removeFromPool(key); // 取消重复请求

        // 生成取消token
        config.cancelToken = new CancelToken(function (cancelFunction) {
            requestPool[key] = cancelFunction
        })
    }

    const token = '';
    if (token) {
        config.headers['token'] = token;
    }


    return config;
}, (error: any) => {
    return Promise.reject(error);
})

// 添加响应拦截器
axiosIns.interceptors.response.use((response) => {
    let config = response.config;
    let key = `${config.method}_${config.url}`;
    removeFromPool(key);

    if (alertLoginAgain) return
    if (response.data.status == '2016') alertLoginAgain = true
    // 用户中心错误处理
    userCenterErrorHandler(response);

    return response;
}, error => {
    return Promise.reject(error); // 返回一个空对象，主要是防止控制台报错
});


// 封装请求
function axiosHttp(method = 'get', url = '', params = {}, emulateJSON = true, config = {}) {
    if (!config.headers) config.headers = {};

    if (method == 'get') {
        config.params = params;
        config.params._t = Math.random() * 100000 >> 0;
    }

    if (method == 'post') {
        config.headers['Content-Type'] = emulateJSON ? 'application/json' : 'application/x-www-form-urlencoded';
        config.data = params;
    }

    config.url = url;
    // if (location.port !== '') {
    //     // vite 启动 没有 process
    //     config.url = `/serve${url}`;
    // }
    config.method = method;

    // 禁止在此处捕获异常
    // 如需统一处理，需要在处理后抛出异常，确保调用者可以处理异常
    return axiosIns.request(config).then(response => {
        let data = response && response.data;

        if (isBoolean(data)) {
            return data
        }

        let escapeData = null;

        try {
            // 处理后端返回值转义字符
            let decodeData = decode(JSON.stringify(data));
            escapeData = JSON.parse(decodeData);
        } catch (error) {
            escapeData = data;
        }

        return escapeData;
    })
}

// get请求
function get(url = '', params = {}, emulateJSON = true, option = {}) {
    return axiosHttp('get', url, params, emulateJSON, option);
}

// post请求
function post(url = '', params = {}, emulateJSON = true, option = {}) {
    return axiosHttp('post', url, params, emulateJSON, option);
}


export default {
    get,
    post
};