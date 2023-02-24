import Table from "react-bootstrap/Table";
import AxiosConfig from "../../axiosConfig";
import { useEffect, useState } from "react";

const TableData = () => {
  const [tableData, setTableData] = useState([]);
  const getTableData = async () => {
    try {
      const response = await AxiosConfig.put("/api/react-test");
      console.log(response);
      setTableData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTableData();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.N.</th>
          <th>Name</th>
          <th>Age</th>
          <th>Occupation</th>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data?.name}</td>
              <td>{data?.age}</td>
              <td>{data?.occupation}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
export default TableData;
