import http from '@/utils/http';

/**
 * @description 获取匿名信息
 * @params {string}  
 * 0: pc
 * 1: android
 * 2: iphone
 * 3: ipad
 */
export function getBanner() {
    return http.get('/banner/0');
}

/**
 * @description 推荐歌单
 * @params {string} limit
 */
export function getPersonalized(params: {}) {
    return http.get('/personalized', params);
}
