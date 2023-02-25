import Table from "react-bootstrap/Table";
import AxiosConfig from "../../axiosConfig";
import { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import "./table.css";

const TableData = () => {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState(tableData);
  const [searchInput, setSearchInput] = useState("");

  const getTableData = async () => {
    try {
      const response = await AxiosConfig.put("/api/react-test");

      setTableData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTableData();
  }, []);

  useEffect(() => {
    setFilteredData(
      tableData.filter((data) =>
        data.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, tableData]);

  return (
    <div className="tableContainer">
      <div className="container">
        <InputGroup className="mb-3">
          <input
            type="text"
            placeholder="Search by name"
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button>Search</Button>
        </InputGroup>
      </div>
      {searchInput && (
        <div className="filterResultContainer">
          You are viewing filtered results!
        </div>
      )}
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
          {filteredData &&
            filteredData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data?.name}</td>
                <td>{data?.age}</td>
                <td>{data?.occupation}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
export default TableData;
