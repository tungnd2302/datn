import { Button } from 'antd';
import React, { useState } from 'react';
import PageName from '../../components/specific/PageName';
import AddModal from '../../features/RentRoomPage/AddModal';
import DataTable from '../../features/RentRoomPage/DataTable';
import RentRoomFilter from '../../features/RentRoomPage/RentRoomFilter';

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

function RentRoomPage(props) {
    const [dataSource, setDataSource] = useState(dataSourceSample);
    const [openAddModal, setOpenAddModal] = useState(false);
    return (
        <div>
            <PageName name="Thuê phòng" />
            <Button type='primary' onClick={() => setOpenAddModal(true)}>Thuê, đặt phòng</Button>
            <RentRoomFilter dataSource = {dataSource} setDataSource={setDataSource} />
            <DataTable dataSource = {dataSource} />
            <AddModal isOpenAddModal = {openAddModal} handleOpenAddModal={setOpenAddModal} />
        </div>
    );
}

export default RentRoomPage;