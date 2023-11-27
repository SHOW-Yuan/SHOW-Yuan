import React, { useEffect, useState } from 'react';
import './index.scss';
import userAvatar from '@/assets/images/userAvatar.jpg';

import { Col, Row, Flex } from 'antd';
import { COL_LEFT, COL_RIGHT } from '@/model/const/Style';
// model
import { mainListAll } from './model';
// components
import Banner from './components/Banner';
import RecommendSong from './components/RecommendSong';
// hooks
import { useFetchBanner } from './hooks/useFetch';

const MainContent: React.FC = () => {
    const [active, setActive] = useState('发现音乐');

    // 初始化内容
    const init = () => {
        useFetchBanner();
    }

    // 初始化数据
    useEffect(() => {
        init();
    }, [])

    return (
        <div className='main-content'>
            <Row>
                {/* left */}
                <Col className='main-content-left' span={COL_LEFT}>
                    {/* 个人信息区域 */}
                    <div className='content-left-avatar'>
                        <img src={userAvatar} alt="" />
                        <span>爱转角iiiii</span>
                        <i className='iconfont icon-xiajiantou'></i>
                    </div>
                    {/* 发现音乐区域 */}
                    <Flex vertical>
                        {
                            mainListAll.map((x, i) => {
                                return (
                                    <div className='content-left-main' key={i}>
                                        { x.title && <div className='content-left-main-title'>{x.title}</div> }
                                        {
                                            x.list.map((j, i) => {
                                                return (
                                                    <div className={`content-left-main-item ${active === j.value && 'active-item'}`} key={j.value}>
                                                        <i className={`iconfont ${j.icon}`}></i>
                                                        <span>{j.label}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Flex>
                </Col>
                {/* right */}
                <Col className='main-content-right' span={COL_RIGHT}>
                    {/* 轮播图 */}
                    <Banner />
                    {/* 推荐歌单 */}
                    <RecommendSong />
                </Col>
            </Row>
        </div>
    )
}

export default MainContent;