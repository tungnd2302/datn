import { Pagination, Table } from 'antd';
import { useState } from 'react';

const DataTable = (props) => {
  const { columns } = props
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentPageData = props.dataSource.slice(startIndex, endIndex);
  return (
    <>
      <Table columns={columns} dataSource={currentPageData} style={{ marginTop: 20 }} pagination={false} />
      <Pagination
        style={{ marginTop: '20px', textAlign: 'right' }}
        current={currentPage}
        pageSize={pageSize}
        total={props.dataSource.length}
        onChange={handlePageChange}
      />
    </>
  )
};
export default DataTable;