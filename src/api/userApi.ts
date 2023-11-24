import http from '@/utils/http';

/**
 * 获取匿名信息
 */
export function getAnonimous() {
    return http.get('/register/anonimous');
}

/**
 * 获取用户信息 , 歌单，收藏，mv, dj 数量
 */
 export function getUserSubcount() {
    return http.get('/user/subcount');
}