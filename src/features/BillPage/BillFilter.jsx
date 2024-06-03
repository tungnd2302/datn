import { UserOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
import React, { useState } from 'react';

function BillFilter(props) {
    const [filter, setFilter] = useState(
        {
            customerName: '',
            startDate: '',
            endDate: ''
        }
    );

    function onFilter() {
        props.setDataSource([
            {
                key: '1',
                fullName: 'John Brown',
                cost: 32000,
                roomName: '501',
                startDate: '12-12-2023',
                endDate: '01-10-2024'
            }
        ])
    }

    return (
        <Row gutter={16} style={{ marginTop: 30 }}>
            <Col span={4}>
                <p>Tìm kiếm theo họ tên</p>
                <Input size="middle" placeholder="large size" prefix={<UserOutlined />} style={{ borderRadius: '8px' }} onChange={(e) => setFilter({
                    ...filter,
                    customerName: e.target.value
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

export default BillFilter
