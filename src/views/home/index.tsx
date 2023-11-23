import React, { FC, useEffect } from 'react';
import './index.scss';

// components
import HeaderTitle from '../headerTitle';
import MainContent from '../mainContent';
import FooterSong from '../footerSong';
// api
import { getAnonimous } from '@/api/userApi';
// model
import MsgModel from '@/model/MsgModel';
import { message } from 'antd';
import Log from '@/utils/log';

const Home: FC = () => {
    const [messageApi, contextHolder] = message.useMessage();

    // 游客登录
    const getToken = async () => {
        try {
            const res = await getAnonimous();
            if(MsgModel.isSuccess(res)) {
                messageApi.open({
                    type: 'success',
                    content: '登录成功',
                });
            }
        }catch(e) {
            Log.error(e, getToken.name);
        }
    }

    useEffect(() => {
        getToken();
    },[])

    return (
        <div className='music-box'>
            {contextHolder}
            <HeaderTitle></HeaderTitle>
            <MainContent></MainContent>
            <FooterSong></FooterSong>
        </div>
    )
}

export default Home;