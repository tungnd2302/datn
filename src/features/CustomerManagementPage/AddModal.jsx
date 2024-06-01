import { Input, Modal, DatePicker, Button, InputNumber, Tag } from 'antd';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import './AddModal.css';

const AddModal = (props) => {
    const { isOpenAddModal, handleOpenAddModal } = props;
    const formik = useFormik({
        initialValues: {
            fullName: '',
            cost: '',
            roomName: '',
            startDate: '',
            endDate: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    useEffect(() => {
        formik.resetForm();
    },[isOpenAddModal])
    
    return (
        <>
            <Modal
                centered
                open={isOpenAddModal}
                onOk={() => handleOpenAddModal(false)}
                onCancel={() => handleOpenAddModal(false)}
                width={600}
                footer={false}
            >
                <h2>Thuê, đặt phòng</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label> Họ và tên khách hàng</label>
                        <Input
                            name='fullName'
                            size="large"
                            placeholder="large size"
                            style={{ borderRadius: '0px', marginTop: 10 }}
                            onChange={formik.handleChange}
                            value={formik.values.fullName}
                        />
                    </div>
                    <div style={{ borderRadius: '8px', marginTop: 15 }}>
                        <label>Ngày nhận phòng</label>
                        <DatePicker style={{ borderRadius: '0px', marginTop: 10, width: '100%' }} name='startDate' onChange={(value) => formik.setFieldValue("startDate", value)} value={formik.values.startDate} />
                    </div>

                    <div style={{ borderRadius: '8px', marginTop: 15 }}>
                        <label>Ngày trả phòng</label>
                        <DatePicker style={{ borderRadius: '0px', marginTop: 10, width: '100%' }} name='endDate' onChange={(value) => formik.setFieldValue("endDate", value)} value={formik.values.endDate} />
                    </div>

                    <div style={{ borderRadius: '8px', marginTop: 15 }}>
                        <label>Phòng khả dụng</label>
                        <div className="room-list" style={{ marginTop: 10 }}>
                            <Tag onClick={() => formik.setFieldValue('roomName', 501)} className="room">501</Tag>
                            <Tag className="room">502</Tag>
                            <Tag className="room">503</Tag>
                            <Tag className="room">504</Tag>
                            <Tag className="room">505</Tag>
                            <Tag className="room">506</Tag>
                            <Tag className="room">574</Tag>
                            <Tag className="room">507</Tag>
                            <Tag className="room">508</Tag>
                            <Tag className="room">501</Tag>
                            <Tag className="room">502</Tag>
                            <Tag className="room">503</Tag>
                            <Tag className="room">504</Tag>
                            <Tag className="room">505</Tag>
                            <Tag className="room">506</Tag>
                            <Tag className="room">574</Tag>
                            <Tag className="room">507</Tag>
                            <Tag className="room">508</Tag>
                        </div>
                    </div>

                    <div style={{ borderRadius: '8px', marginTop: 15, marginBottom: 15 }}>
                        <label>Giá tiền</label>
                        <InputNumber
                            name='cost'
                            min={0}
                            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                            onChange={(value) => formik.setFieldValue("cost", value)}
                            style={{ borderRadius: '0px', marginTop: 10, width: '100%' }}
                        />
                    </div>
                    <Button htmlType='submit'>Submit</Button>
                </form>
            </Modal>
        </>
    );
};
export default AddModal;