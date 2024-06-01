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
            dataIndex: 'customerId',
            key: 'customerId',
        },
        {
            title: 'Tên khách hàng',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Giới tính',
            dataIndex: 'sex',
            key: 'sex',
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
        }
    ];
    return ( 
        <>
            <Table columns={columns} dataSource={uploadedCustomersList} style={{ marginTop: 20 }} pagination={false} />
        </>
    );
}

export default ExcelUploadResult;