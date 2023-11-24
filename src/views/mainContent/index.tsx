import React from 'react';
import './index.scss';

import { Col, Row } from 'antd';
import { COL_LEFT, COL_RIGHT } from '@/model/const/Style';

function MainContent() {
    return (
        <div className='main-content'>
            <Row>
                <Col span={COL_LEFT}>col-12</Col>
                <Col span={COL_RIGHT}>col-12</Col>
            </Row>
        </div>
    )
}

export default MainContent;