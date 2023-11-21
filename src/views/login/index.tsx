import React, { FC } from "react";

import { Card, Button, Checkbox, Form, Input } from 'antd';
import "./index.scss";

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: boolean;
};

const Login: FC = () => {

    return (
        <div className="login-box">
            <Card style={{ width: 400 }}>
                <div className="logo">
                    <i className="iconfont icon-wy"></i>
                </div>

                <Form
                    name="basic"
                    className="login-form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        name="username"
                        rules={[{ required: true, message: '请输入账号!' }]}
                    >
                        <Input prefix={<i className="iconfont icon-shouji"></i>} placeholder="请输入账号" />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input
                            prefix={<i className="iconfont icon-mima"></i>}
                            type="password"
                            placeholder="请输入密码"
                        />
                    </Form.Item>

                    <Form.Item>
                        <div className="form-auto-check">
                            <Form.Item<FieldType> name="remember" valuePropName="checked" noStyle>
                                <Checkbox>自动登录</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                验证登录
                            </a>
                        </div>
                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 24 }}>
                        <Button block type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>

            </Card>
        </div>
    )
}

export default Login;