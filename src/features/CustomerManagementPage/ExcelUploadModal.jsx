import { UploadOutlined } from '@ant-design/icons';
import { Button, Modal, message } from 'antd';
import ButtonGroup from 'antd/es/button/button-group';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './AddModal.css';
import ExcelUploadDragger from './ExcelUploadDragger';
import ExcelUploadResult from './ExcelUploadResult';


const ExcelUploadModal = (props) => {
    const { isOpenExcelUploadModal, handleExcelUploadModal } = props;
    const [uploadedCustomers, setUploadedCustomers] = useState([]);
    const [isShowDragger, setShowDragger] = useState(true);

    const convertExcelRowToObject = (rows) => {
        let result = [];
        rows.length > 0 && rows.map(row => {
            const rowItemArray = Object.values(row)
            const elm = {
                fullName: rowItemArray[0],
                sex: rowItemArray[2],
                phoneNumber: rowItemArray[1],
                address: rowItemArray[3],
            }
            result.push(elm)
        })

        return result;
    }


    const dragProps = {
        name: 'file',
        multiple: false,
        accept: '.xlsx, .xls',
        customRequest({ file, onSuccess }) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const binaryStr = e.target.result;
                const workbook = XLSX.read(binaryStr, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                if (json.length) {
                    const headers = json[0];
                    const dataRows = json.slice(1).map((row, rowIndex) => {
                        let rowData = {};
                        headers.forEach((header, index) => {
                            rowData[header] = row[index] || null;
                        });
                        rowData.key = rowIndex; // Add unique key for table row
                        return rowData;
                    });
                    setUploadedCustomers(convertExcelRowToObject(dataRows))
                }

                onSuccess('ok');
            };
            reader.readAsBinaryString(file);
        },
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                message.info(`${info.file.name} is uploading`);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                setShowDragger(false)
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <>
            <Modal
                centered
                open={isOpenExcelUploadModal}
                onOk={() => handleExcelUploadModal(false)}
                onCancel={() => handleExcelUploadModal(false)}
                width={1000}
                footer={false}
            >
                <h2>Tải tệp khách hàng</h2>

                {
                    isShowDragger == true ?
                        <ExcelUploadDragger dragProps={dragProps} /> :
                        <ExcelUploadResult uploadedCustomersList={uploadedCustomers} />
                }
                {
                    !isShowDragger ?
                        <ButtonGroup style={{ marginTop: '20px' }}>
                            <Button type='primary' onClick={() => console.log('chốt')}><UploadOutlined /> Submit</Button>
                            <Button type='primary' onClick={() => setShowDragger(true)}>Tải lại</Button>
                        </ButtonGroup>
                    : <></>
                }
            </Modal>
        </>
    );
};
export default ExcelUploadModal;