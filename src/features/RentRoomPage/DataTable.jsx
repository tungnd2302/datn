import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Pagination, Space, Table } from 'antd';
import React, { useState } from 'react';
const columns = [
  {
    title: 'Tên phòng',
    dataIndex: 'roomName',
    key: 'roomName',
  },
  {
    title: 'Họ và tên khách thuê',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: 'Ngày đến',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: 'Ngày đi',
    dataIndex: 'endDate',
    key: 'endDate',
  },
  {
    title: 'Giá tiền',
    dataIndex: 'cost',
    key: 'cost',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>
            <EditOutlined />
        </a>
        <a>
            <DeleteOutlined />
        </a>
      </Space>
    ),
  },
];


const DataTable = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; 

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    
    const currentPageData = props.dataSource.slice(startIndex, endIndex);
    return (
        <>
            <Table columns={columns} dataSource={currentPageData } style={{ marginTop: 20 }} pagination={false} />
            <Pagination
                style={{ marginTop: '20px', textAlign: 'right' }}
                current={currentPage}
                pageSize={pageSize}
                total={props.dataSource.length}
                onChange={handlePageChange}
            />
        </>
    )
};
export default DataTable;