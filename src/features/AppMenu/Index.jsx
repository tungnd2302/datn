import { GroupOutlined, HomeOutlined, InfoCircleOutlined, MoneyCollectOutlined, PaperClipOutlined, RobotOutlined, UserOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const adminMenuItems = [
    {
        label: 'Trang chủ',
        key: '',
    },
    {
        label: 'Quản lý dịch vụ',
        key: 'service-management',
        icon: <RobotOutlined />,
    },
    {
        label: 'Quản lý thông tin phòng',
        key: 'room-management',
        icon: <InfoCircleOutlined />,
    },
    {
        label: 'Quản lý hóa đơn',
        key: 'bill-management',
        icon: <PaperClipOutlined />,
    },
    {
        label: 'Quản lý tài khoản',
        key: 'account-management',
        icon: <UserOutlined />,
    },
];

const employeeMenuItems = [
    {
        label: 'Trang chủ',
        key: '',
    },
    {
        label: 'Quản lý khách sạn',
        key: 'hotel-management',
        icon: <HomeOutlined />,
    },
    {
        label: 'Quản lý khách hàng',
        key: 'customer-management',
         icon: <GroupOutlined />,
    },
    {
        label: 'Quản lý giao dịch',
        key: 'transaction-management',
        icon: <MoneyCollectOutlined />,
        children: [
            {
                label: 'Thuê phòng',
                key: 'rent',
            },
            {
                label: 'Gọi dịch vụ',
                key: 'service-order',
            },
        ],
    },
    {
        label: 'Quản lý dịch vụ',
        key: 'service-management',
        icon: <RobotOutlined />,
    },
    {
        label: 'Quản lý thông tin phòng',
        key: 'room-management',
        icon: <InfoCircleOutlined />,
    },
    {
        label: 'Quản lý hóa đơn',
        key: 'bill-management',
        icon: <PaperClipOutlined />,
    },
];


const AppMenu = () => {
    const navigate = useNavigate();
    const [roleMenus, setRoleMenus] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('Role')) {
            const role = localStorage.getItem('Role')
            if (role == 'admin') {
                setRoleMenus(adminMenuItems)
            } else {
                setRoleMenus(employeeMenuItems)
            }
        }
    }, [])
    const redirect = (e) => {
        return navigate(`${e.key}`);
    }
    return (<Menu
        onClick={(e) => redirect(e)}
        mode="horizontal"
        items={roleMenus}
    />);
};

export default AppMenu;