import { Input, Modal, DatePicker, Button, Select, message } from 'antd';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import axiosInstance from '../../utils/axios';
import './EditModal.css';
import moment from 'moment';

const EditModal = (props) => {
    const { isOpenEditModal, handleOpenEditModal, itemToUpdate } = props;
    const [messageApi, contextHolder] = message.useMessage();

    const formik = useFormik({
        initialValues: {
            maKH: '',
            hoTen: '',
            gioiTinh: 'Nam',
            ngaySinh: '',
            sdt: '',
            cmt: '',
            diaChi: '',
        },
        enableReinitialize: true,
        onSubmit: async (values) => {
            const data = {
                ...values,
                khid: itemToUpdate.khid
            }
            const result = await axiosInstance.put('Guests', data);
            if (result.status === 200) {
                console.log(result, 'result')
                messageApi.open({
                    type: 'success',
                    content: 'Chỉnh sửa khách hàng thành công',
                });
                handleOpenEditModal(false)
            }
        },
    });

    useEffect(() => {
        console.log(itemToUpdate, 'itemToUpdate')
        formik.setValues({
            maKH: itemToUpdate.maKH,
            hoTen: itemToUpdate.hoTen,
            gioiTinh: itemToUpdate.gioiTinh,
            // ngaySinh: itemToUpdate.ngaySinh,
            sdt: itemToUpdate.sdt,
            cmt: itemToUpdate.cmt,
            diaChi: itemToUpdate.diaChi
        });
        // formik.setFieldValue(moment(itemToUpdate.ngaySinh).format('yyyy-mm-dd'))
        formik.setFieldValue('ngaySinh', moment(itemToUpdate.ngaySinh))
    }, [itemToUpdate])

    return (
        <>
            {contextHolder}
            <Modal
                centered
                open={isOpenEditModal}
                onOk={() => handleOpenEditModal(false)}
                onCancel={() => handleOpenEditModal(false)}
                width={600}
                footer={false}
            >
                <h2>Chỉnh sửa khách hàng</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label>Mã khách hàng</label>
                        <Input
                            name='maKH'
                            size="large"
                            placeholder=""
                            style={{ borderRadius: '0px', marginTop: 10 }}
                            onChange={formik.handleChange}
                            value={formik.values.maKH}
                        />
                    </div>
                    <div style={{ borderRadius: '8px', marginTop: 15 }}>
                        <label> Họ và tên khách hàng</label>
                        <Input
                            name='hoTen'
                            size="large"
                            placeholder=""
                            style={{ borderRadius: '0px', marginTop: 10 }}
                            onChange={formik.handleChange}
                            value={formik.values.hoTen}
                        />
                    </div>
                    <div style={{ borderRadius: '8px', marginTop: 15 }}>
                        <label> Số CMT/CCCD</label>
                        <Input
                            name='cmt'
                            size="large"
                            placeholder=""
                            style={{ borderRadius: '0px', marginTop: 10 }}
                            onChange={formik.handleChange}
                            value={formik.values.cmt}
                        />
                    </div>
                    <div style={{ borderRadius: '8px', marginTop: 15 }}>
                        <label> Giới tính</label>
                        <Select
                            size='large'
                            name="gioiTinh"
                            defaultValue={"Nam"}
                            style={{ width: '100%', marginTop: 10 }}
                            onChange={(value) => formik.setFieldValue("gioiTinh", value)}
                            options={[
                                { value: 'Nam', label: 'Nam' },
                                { value: 'Nữ', label: 'Nữ' }
                            ]}
                        />
                    </div>
                    <div style={{ borderRadius: '8px', marginTop: 15 }}>
                        <label> Số điện thoại</label>
                        <Input
                            name='sdt'
                            size="large"
                            placeholder=""
                            style={{ borderRadius: '0px', marginTop: 10 }}
                            onChange={formik.handleChange}
                            value={formik.values.sdt}
                        />
                    </div>
                    <div style={{ borderRadius: '8px', marginTop: 15 }}>
                        <label> Địa chỉ</label>
                        <Input
                            name='diaChi'
                            size="large"
                            placeholder=""
                            style={{ borderRadius: '0px', marginTop: 10 }}
                            onChange={formik.handleChange}
                            value={formik.values.diaChi}
                        />
                    </div>
                    <div style={{ borderRadius: '8px', marginTop: 15, marginBottom: 15 }}>
                        <label> Ngày sinh</label>
                        <DatePicker style={{ borderRadius: '0px', marginTop: 10, width: '100%' }} name='ngaySinh' onChange={(value) => formik.setFieldValue("ngaySinh", value)} value={formik.values.ngaySinh} />
                    </div>
                    <Button htmlType='submit'>Submit</Button>
                </form>
            </Modal>
        </>
    );
};
export default EditModal;