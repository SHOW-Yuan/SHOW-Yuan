import http from '@/utils/http';

/**
 * 获取匿名信息
 */
export function getAnonimous() {
    return http.get('/register/anonimous');
}