import React, { useState } from 'react';
import './index.scss';

import { Col, Row, Flex, Input } from 'antd';
import { COL_LEFT, COL_RIGHT } from '@/model/const/Style';
// model
import { headerDiscoverList } from '@/views/headerTitle/model';
// type
import { DiscoverItemType } from '@/types/home';

/* 头部组件 */
const HeaderTitle: React.FC = () => {
    const [active, setActive] = useState('个性推荐');

    return (
        <div className='header-content'>
            <Row>
                {/* left */}
                <Col className='header-content-left' span={COL_LEFT}>
                    {/* 应用操作按钮 */}
                    <div></div>
                    {/* 主区域路由控制 */}
                    <div className='content-left-route'>
                        <i className='iconfont icon-xiangxiajiantou'></i>
                        <i className='iconfont icon-xiangxiajiantou'></i>
                    </div>
                </Col>
                {/* right */}
                <Col className='header-content-right' span={COL_RIGHT}>
                    <Row>
                        {/* 发现音乐 */}
                        <Col span={14}>
                            <Flex className='content-right-r1' align="center" justify='space-around'>
                                { 
                                    headerDiscoverList.map((x: DiscoverItemType) => {
                                        return <span key={x.value} className={active === x.value ? 'active' : ''}>{x.label}</span>
                                    }) 
                                }
                            </Flex>
                        </Col>
                        {/* 搜索框 */}
                        <Col span={6} offset={1}>
                            <Flex className='content-right-r2' align="center" justify='center'>
                                <Input size="small" placeholder="small size" prefix={<i className='iconfont icon-sousuo' />} />
                            </Flex>
                        </Col>
                        {/* 设置、个人信息 */}
                        <Col span={3}>
                            <Flex className='content-right-r3' align="center" justify='space-around'>
                                <i className='iconfont icon-shezhi'></i>
                                <i className='iconfont icon-mail'></i>
                                <i className='iconfont icon-zhuti-04'></i>
                            </Flex>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default HeaderTitle;