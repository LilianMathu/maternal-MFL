import { Table, Typography } from "antd";
import { dataSource, columns } from "./tabledata";
import "./maternal.scss";

const { Title } = Typography;

const Maternal = () => {
  return (
    <div className="maternal">
      <Title level={4}>Maternal Master Facility List</Title>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(record) => record.id}
        scroll={{
          y: 300,
        }}
      />
    </div>
  );
};

export default Maternal;
