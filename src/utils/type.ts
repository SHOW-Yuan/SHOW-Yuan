import _ from 'lodash';

/* 判断类型 */
export function typeOf(obj: any) {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object AsyncFunction]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object',
        // @ts-ignore
        '[object AsyncFunction]': 'asyncFunction',
    };

    // @ts-ignore
    return map[toString.call(obj)];
}

/** 
 * @description 是否为 字符串类型
*/
export function isString(string: any) {
    return typeOf(string) === 'string'
}

/** 
 * @description 是否为 数组类型
*/
export function isArray(array: any) {
    return Array.isArray(array) && typeOf(array) === 'array'
}

/** 
 * @description 是否不为 数组类型
*/
export function isNotArray(array: any) {
    return !isArray(array)
}

/** 
 * @description 是否为 数字类型
*/
export function isNumber(number: any) {
    return typeOf(number) === 'number' && !isNaN(number)
}

/** 
 * @description 是否不为 数字类型
*/
export function isNotNumber(number: any) {
    return !isNumber(number)
}

/** 
 * @description 是否为 布尔类型
*/
export function isBoolean(boolean: any) {
    return typeOf(boolean) === 'boolean'
}

/** 
 * @description 是否为 对象类型
*/
export function isObject(object: any) {
    return object && typeOf(object) === 'object'
}

/** 
 * @description 是否为 函数类型
*/
export function isFunction(func: any) {
    return func && typeOf(func) === 'function'
}

/** 
 * @description 是否不为 函数类型
*/
export function isNotFunction(func: any) {
    return !isFunction(func)
}

/**
 * @description 是否为 函数类型
 */
export function isAsyncFunction(func: any) {
    return func && typeOf(func) === 'asyncFunction'
}
/**
 * @description 是否为 undefined
*/
export function isUndefined(value: any) {
    return typeOf(value) === 'undefined'
}

/**
 * @description 是否不为 undefined
*/
export function isNotUndefined(value: any) {
    return !isUndefined(value)
}

/**
 * @description 是否为 null
 */
export function isNull(value: any) {
    return typeOf(value) === 'null'
}

/**
 * @description 是否为 空
*/
export function isEmpty(value: any) {
    return _.isEmpty(value)
}

/**
 * @description 是否不为 空
*/
export function isNotEmpty(value: any) {
    return !isEmpty(value)
}

/**
 * @description 是否为 DOM元素
*/
export function isElement(element: any) {
    return _.isElement(element)
}