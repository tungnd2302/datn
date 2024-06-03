import { CheckCircleOutlined, FileFilled } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useState } from 'react';
import PageName from '../../components/specific/PageName';
import BillFilter from '../../features/BillPage/BillFilter';
import DataTable from '../../features/BillPage/DataTable';
import { useHref, useNavigate } from 'react-router-dom';

const dataSourceSample = [
    {
        key: '1',
        fullName: 'John Brown',
        cost: 32000,
        roomName: '501',
        startDate: '12-12-2023',
        endDate: '01-10-2024'
    },
    {
        key: '12',
        fullName: 'John Brown',
        cost: 32000,
        roomName: '502',
        startDate: '12-12-2023',
        endDate: '01-10-2024'
    },
    {
        key: '14',
        fullName: 'John Brown',
        cost: 32000,
        roomName: '503',
        startDate: '12-12-2023',
        endDate: '01-10-2024'
    },
    {
        key: '15',
        fullName: 'John Brown',
        cost: 32000,
        roomName: '504',
        startDate: '12-12-2023',
        endDate: '01-10-2024'
    },
    {
        key: '112',
        fullName: 'John Brown',
        cost: 32000,
        roomName: '505',
        startDate: '12-12-2023',
        endDate: '01-10-2024'
    }
];

function BillPage(props) {
    const [dataSource, setDataSource] = useState(dataSourceSample);
    const navigate = useNavigate();
    const history = useHref();


    const onAction = (status) => {
        if (status === 'Chưa thanh toán') return;
        // xử lí
        navigate('/bill-management/' + 1222121, { replace: true })

    }

    const columns = [
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: 'Chứng minh thư khách hàng',
            dataIndex: 'cmt',
            key: 'cmt',
        },
        {
            title: 'Tên phòng',
            dataIndex: 'tenPhong',
            key: 'tenPhong',
        },
        {
            title: 'Tên dịch vụ',
            dataIndex: 'tenDv',
            key: 'tenDv',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'trangThai',
            key: 'trangThai',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => onAction('')}>
                        <CheckCircleOutlined />
                    </a>
                </Space>
            ),
        },
    ];
    return (
        <div>
            <PageName name="Hóa đơn" />
            <Button type='primary' onClick={() => { }}>Xuất hóa đơn</Button>
            <BillFilter dataSource={dataSource} setDataSource={setDataSource} />
            <DataTable columns={columns} dataSource={dataSource} />
        </div>
    );
}

export default BillPage;