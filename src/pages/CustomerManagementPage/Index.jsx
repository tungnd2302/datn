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
import EditModal from '../../features/CustomerManagementPage/EditModal';


function CustomerManagementPage(props) {
  const [dataSource, setDataSource] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openExcelUploadModal, setExcelUploadModal] = useState(false);
  const [selectedItemToEdit, setSelectedItemToEdit] = useState(false);

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
          <a onClick={() => editItem(record)}>
            <EditOutlined />
          </a>
          <a>
            <DeleteOutlined />
          </a>
        </Space>
      ),
    },
  ]

  const editItem = (record) => {
    setSelectedItemToEdit(record)
    setOpenEditModal(true)
  }

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
  }, [openAddModal, openExcelUploadModal, openEditModal])
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
      <EditModal isOpenEditModal={openEditModal} handleOpenEditModal={setOpenEditModal} itemToUpdate={selectedItemToEdit}/>
      <ExcelUploadModal isOpenExcelUploadModal={openExcelUploadModal} handleExcelUploadModal={setExcelUploadModal} />
    </div>
  );
}

export default CustomerManagementPage;