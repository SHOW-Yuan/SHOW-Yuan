import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// api
import { getAnonimous, getUserSubcount } from '@/api/userApi';
// model
import MsgModel from '@/model/MsgModel';
import { message } from 'antd';
import Log from '@/utils/log';
// store
import { setUserInfo } from '@/store/modules/user';
  

// 获取用户信息
function useFetchUserInfo() {
    const [messageApi, contextHolder] = message.useMessage();
    // store
    const { user = {} } = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    // 游客登录
    const getToken = async () => {
        try {
            if(user.cookie) return;

            const res = await getAnonimous();
            if(MsgModel.isSuccess(res)) {
                const { cookie, createTime, userId } = res;

                const loginUser =  {
                    cookie, 
                    createTime, 
                    userId
                }
                dispatch(setUserInfo(loginUser));

                messageApi.open({
                    type: 'success',
                    content: '登录成功',
                });
            }
        }catch(e) {
            Log.error(e, getToken.name);
        }
    }

    return {
        contextHolder,
        getToken,
    }
}

// 获取用户信息
function useFetchUserSubcount() {
    // 游客登录
    const fetchUserSubcount = async () => {
        try {

            const res = await getUserSubcount();
            if(MsgModel.isSuccess(res)) {

            }
        }catch(e) {
            Log.error(e, fetchUserSubcount.name);
        }
    }

    return {
        fetchUserSubcount,
    }
}

export {
    useFetchUserInfo,
    useFetchUserSubcount,
}