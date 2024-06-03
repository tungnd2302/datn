import { useState } from 'react';
import PageName from '../../components/specific/PageName';
import { Table } from 'antd/lib';
import './BillDetailPage.css'
import ButtonGroup from 'antd/es/button/button-group';
import { Button } from 'antd/lib/radio';
import { CreditCardOutlined, FilePdfOutlined } from '@ant-design/icons';

function BillDetailPage(props) {
    const roomDetailColumns = [
        {
            title: 'Tên phòng',
            dataIndex: 'tenPhong',
            key: 'tenPhong',
        },
        {
            title: 'Ngày bắt đầu',
            dataIndex: 'ngayBatDau',
            key: 'ngayBatDau',
        },
        {
            title: 'Ngày kết thúc',
            dataIndex: 'ngayKetThuc',
            key: 'ngayKetThuc',
        }
    ];

    const orderDetailColumns = [
        {
            title: 'Tên dịch vụ',
            dataIndex: 'tenDV',
            key: 'tenPhong',
        },
        {
            title: 'Thời gian gọi',
            dataIndex: 'thoiGianGoi',
            key: 'tenDV',
        }
    ];

    const [sampleData, setSampleData] = useState({
        hoTen: 'Đào Quang Minh',
        cmt: '3213123123123',
        diaChi: 'Daklak',
        dienThoai: '432423423',
        arr1: [
            {
                tenPhong: 'abc',
                ngayBatDau: '2024-12-12',
                ngayKetThuc: '2024-12-30'
            }
        ],
        arr2: [
            {
                tenDV: 'abc',
                thoiGianGoi: '2024-12-12',
            }
        ]
    })
    return (
        <div>
            <PageName name="Chi tiết hóa đơn" />
            <div className="page-header">
                <h2> Khách sạn Feathers Angel</h2>
                <p>850 Đ. Láng, Trung Hòa, Cầu Giấy, Hà Nội, Việt Nam</p>
                <p>Điện thoại: 0123456789</p>
                <h1>Hóa đơn</h1>
            </div>
            <div className="page-content">
                <p>Khách hàng: {sampleData.hoTen} </p>
                <p>Số chứng minh thư: {sampleData.cmt} </p>
                <p>Địa chỉ: {sampleData.diaChi} </p>
                <p>Điện thoại: {sampleData.dienThoai} </p>
                <Table columns={roomDetailColumns} dataSource={sampleData.arr1} style={{ marginTop: 20 }} pagination={false} />
                <Table columns={orderDetailColumns} dataSource={sampleData.arr2} style={{ marginTop: 20 }} pagination={false} />
            </div>
            <div className="page-footer">
                <ButtonGroup>
                    <Button>Back</Button>
                    <Button><FilePdfOutlined />Xuất PDF</Button>
                    <Button><CreditCardOutlined /> Thanh toán</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default BillDetailPage;