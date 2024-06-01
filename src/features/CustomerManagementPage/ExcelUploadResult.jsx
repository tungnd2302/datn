import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

ExcelUploadResult.propTypes = {

};

function ExcelUploadResult(props) {
    const { uploadedCustomersList} = props;
    console.log(uploadedCustomersList, 'uploadedCustomersList')
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
            title: 'Giới tính',
            dataIndex: 'gioiTinh',
            key: 'gioiTinh',
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
        }
    ];
    return ( 
        <>
            <Table columns={columns} dataSource={uploadedCustomersList} style={{ marginTop: 20 }} pagination={false} />
        </>
    );
}

export default ExcelUploadResult;