import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './css/login.less';
import logo from './imgs/logoy.png'

export default class Login extends Component {

    pwdValidator = (rule,value,callback) => {
        // 如果用户没有输入密码
        if (!value) {
            callback('必须输入密码');
        } else if (value.length < 4) {
            // 如果用户输入的密码位数小于4
            callback('密码位数必须大于等于4');
        } else if (value.length > 12) {
            callback('密码位数必须小于等于12');
        } else if (!/^\w+$/.test(value)) {
            callback('密码必须由数字字母下划线组成');
        } else {
            callback()
        }
    }

    render() {
        const onFinish = (values) => {
            alert('将用户名和密码发送给服务器')
        };
        return (
            <div className="login">
                <header>
                    <img src={logo} alt="logo" />
                    <h1>宇宙管理系统</h1>
                </header>
                <section>
                    <h1>用户登录</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                        // 用户名必须输入，必须大于等于四位，必须小于等于12位，必须是英文数字或下划线
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                                {max: 12,message: '用户名必须小于等于12位'},
                                {min: 4,message: '用户名必须大于等于4位'},
                                {pattern: /^\w+$/,message: '必须由数字、字母、下划线组成'}
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {validator: this.pwdValidator},
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
