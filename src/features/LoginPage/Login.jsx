import React from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css'
function Login(props) {
    const { onFinish, errMessage } = props;
    return (
        <div className='app-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card style={{ width: 300 }}>
                <h3 style={{ textAlign: 'center'}}>Đăng nhập</h3>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    { errMessage && <p style={{ color: 'red' }}>
                        Sai tên đăng nhập hoặc mật khẩu
                    </p>}
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default Login;