import React from 'react';
import './index.scss';

import { Col, Row } from 'antd';
import { COL_LEFT, COL_RIGHT } from '@/model/const/Style';

function HeaderTitle() {
    return (
        <div className='header-title'>
            <Row>
                <Col className='header-title-left' span={COL_LEFT}>
                    <div className='title-left-route'>
                        <i className='iconfont icon-xiajiantou'></i>
                        <i className='iconfont icon-xiajiantou'></i>
                    </div>
                </Col>
                <Col className='header-title-right' span={COL_RIGHT}>col-12</Col>
            </Row>
        </div>
    )
}

export default HeaderTitle;