import { DeleteOutlined, EditOutlined, FileExcelOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import React, { useEffect, useState } from 'react';
import PageName from '../../components/specific/PageName';
import AddModal from '../../features/CustomerManagementPage/AddModal';
import RentRoomFilter from '../../features/CustomerManagementPage/CustomerManagementFilter';
import DataTable from '../../features/CustomerManagementPage/DataTable';
import ExcelUploadModal from '../../features/CustomerManagementPage/ExcelUploadModal';
import axiosInstance from '../../utils/axios';

const columns = [
  {
    title: 'Mã khách hàng',
    dataIndex: 'maKH',
    key: 'maKH',
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'hoTen',
    key: 'hoTen',
  },
  {
    title: 'Số CMT',
    dataIndex: 'cmt',
    key: 'cmt',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'sdt',
    key: 'sdt',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'diaChi',
    key: 'diaChi',
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'ngaySinh',
    key: 'ngaySinh',
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
]


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
  const [dataSource, setDataSource] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openExcelUploadModal, setExcelUploadModal] = useState(false);

  const getCustomers = async () => {
    try {
      const result = await axiosInstance.get(`Guests?pagenumber=1&rowsofpage=10000`);
      if (result.data && result.status === 200) {
        console.log(result.data)
        setDataSource(result.data)
      }

    }
    catch (e) {
      if (e.response?.status === 401) {
        console.log(1)
      }
    }
  }

  useEffect(() => {
    getCustomers()
  }, [openAddModal])
  return (
    <div>
      <PageName name="Quản lý khách hàng" />
      <ButtonGroup>
        <Button type='primary' onClick={() => setOpenAddModal(true)}><UserAddOutlined /> Thêm khách hàng</Button>
        <Button type='primary' onClick={() => setExcelUploadModal(true)}><FileExcelOutlined /> Tải tệp khách hàng</Button>
      </ButtonGroup>
      <RentRoomFilter dataSource={dataSource} setDataSource={setDataSource} />
      <DataTable columns={columns} dataSource={dataSource} />

      {/* page Modal */}
      <AddModal isOpenAddModal={openAddModal} handleOpenAddModal={setOpenAddModal} />
      <ExcelUploadModal isOpenExcelUploadModal={openExcelUploadModal} handleExcelUploadModal={setExcelUploadModal} />
    </div>
  );
}

export default CustomerManagementPage;