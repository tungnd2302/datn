import { Button, Space } from 'antd';
import React, { useState } from 'react';
import PageName from '../../components/specific/PageName';
import AddModal from '../../features/CustomerManagementPage/AddModal';
import DataTable from '../../features/CustomerManagementPage/DataTable';
import RentRoomFilter from '../../features/CustomerManagementPage/CustomerManagementFilter';
import { DeleteOutlined, EditOutlined, UserAddOutlined, FileExcelOutlined } from '@ant-design/icons';
import ButtonGroup from 'antd/es/button/button-group';
import ExcelUploadModal from '../../features/CustomerManagementPage/ExcelUploadModal';

const columns = [
    {
      title: 'Mã khách hàng',
      dataIndex: 'customerId',
      key: 'customerId',
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Số CMT',
      dataIndex: 'IDcard',
      key: 'IDcard',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
        title: 'Ngày sinh',
        dataIndex: 'birthday',
        key: 'birthday',
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

const dataSourceSample = [
    {
        key: '1',
        customerId: 'CR343042034',
        fullName: 'John Brown',
        phoneNumber: '032432432',
        IDcard: '501',
        birthday: '12-12-2023',
        address: 'Canada'
    },
    {
        key: '1',
        customerId: 'CR343042034',
        fullName: 'John Brown',
        phoneNumber: '032432432',
        IDcard: '501',
        birthday: '12-12-2023',
        address: 'Canada'
    },
    {
        key: '4',
        customerId: 'CR343042034',
        fullName: 'John Brown',
        phoneNumber: '032432432',
        IDcard: '501',
        birthday: '12-12-2023',
        address: 'Canada'
    },
    {
        key: '3',
        customerId: 'CR343042034',
        fullName: 'John Brown',
        phoneNumber: '032432432',
        IDcard: '501',
        birthday: '12-12-2023',
        address: 'Canada'
    },
    {
        key: '2',
        customerId: 'CR343042034',
        fullName: 'John Brown',
        phoneNumber: '032432432',
        IDcard: '501',
        birthday: '12-12-2023',
        address: 'Canada'
    },
];

function CustomerManagementPage(props) {
    const [dataSource, setDataSource] = useState(dataSourceSample);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openExcelUploadModal, setExcelUploadModal] = useState(false);
    return (
        <div>
            <PageName name="Quản lý khách hàng" />
            <ButtonGroup>
                <Button type='primary' onClick={() => setOpenAddModal(true)}><UserAddOutlined /> Thêm khách hàng</Button>
                <Button type='primary' onClick={() => setExcelUploadModal(true)}><FileExcelOutlined /> Tải tệp khách hàng</Button>
            </ButtonGroup>
            <RentRoomFilter dataSource = {dataSource} setDataSource={setDataSource} />
            <DataTable columns={columns} dataSource = {dataSource} />

            {/* page Modal */}
            <AddModal isOpenAddModal = {openAddModal} handleOpenAddModal={setOpenAddModal} />
            <ExcelUploadModal isOpenExcelUploadModal = {openExcelUploadModal} handleExcelUploadModal={setExcelUploadModal} />
        </div>
    );
}

export default CustomerManagementPage;