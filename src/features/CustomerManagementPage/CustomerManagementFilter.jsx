import { UserOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Input, Row } from 'antd';
import React, { useState } from 'react';

function RentRoomFilter(props) {
    const [filter, setFilter] = useState(
        {
            fullName: '',
        }
    );

    function onFilter() {
        props.setDataSource([
            {
                key: '1',
                customerId: 'CR343042034',
                fullName: 'John Brown',
                phoneNumber: '032432432',
                IDcard: '501',
                birthday: '12-12-2023',
                address: 'Canada'
            }
        ])
    }

    return (
        <Row gutter={16} style={{ marginTop: 30}}>
            <Col span={4}>
                <p>Tìm kiếm tên khách hàng</p>
                <Input size="middle" placeholder="large size" prefix={<UserOutlined />} style={{ borderRadius: '8px' }} onChange={(e) => setFilter({
                    ...filter,
                    fullName: e.target.value
                })} />
            </Col>
            <Col span={3}>
                <Button style={{ marginTop: 45, width: '100%' }} onClick={onFilter}>
                    Tìm kiếm
                </Button>
            </Col>
        </Row>
    )
}

export default RentRoomFilter
