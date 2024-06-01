import { Input, Modal, DatePicker, Button, Select, message } from 'antd';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import axiosInstance from '../../utils/axios';
import './AddModal.css';

const AddModal = (props) => {
    const { isOpenAddModal, handleOpenAddModal } = props;
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
        onSubmit: async (values) => {
            const data = {
                ...values,
                ghiChu: 'Khong co',
                createBy: localStorage.getItem('EmployeeName')
            }
            const result = await axiosInstance.post('Guests', data);
            if (result.status === 200) {
                console.log(result, 'result')
                messageApi.open({
                    type: 'success',
                    content: 'Thêm khách hàng thành công',
                });
                handleOpenAddModal(false)
            }
        },
    });

    useEffect(() => {
        formik.resetForm();
    }, [isOpenAddModal])

    return (
        <>
            {contextHolder}
            <Modal
                centered
                open={isOpenAddModal}
                onOk={() => handleOpenAddModal(false)}
                onCancel={() => handleOpenAddModal(false)}
                width={600}
                footer={false}
            >
                <h2>Tạo mới khách hàng</h2>
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
export default AddModal;