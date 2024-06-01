import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Layout, Menu } from 'antd';
import React from 'react';
import './Header.css';
import AppMenu from '../../../features/AppMenu/Index';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;


const AppHeader = () => {
    const navigate = useNavigate();

    function logout() {
        if (localStorage.getItem("Token")) {
            localStorage.removeItem("Token");
            localStorage.removeItem("Role");
            localStorage.removeItem("UserName");
            localStorage.removeItem("EmployeeName");
        }
        navigate('/login')
    }
    const menu = (
        <Menu>
            <Menu.Item key="1">Profile</Menu.Item>
            <Menu.Item key="2" onClick={logout}>Logout</Menu.Item>
        </Menu>
    );
    return (
        <Header className="app-header">
            <div style={{ display: 'flex' }}>
                <div className="logo">MyApp</div>
                <AppMenu />
            </div>
            <Dropdown overlay={menu} className="user-dropdown">
                <div className="user-menu">
                    <Avatar icon={<UserOutlined />} />
                    <span className="username">John Doe</span>
                    <DownOutlined />
                </div>
            </Dropdown>
        </Header>
    );
};

export default AppHeader;