import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import "./table.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import useFetch from "../fetchdata";

const TableData = () => {
  const tableData = useFetch();
  const [filteredData, setFilteredData] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [sortedbyName, setSortedbyName] = useState();
  const [sortByAge, setSortByAge] = useState();
  const navigation = useNavigate();
  console.log(filteredData);

  useEffect(() => {
    setFilteredData(
      tableData.filter((data) =>
        data.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, tableData]);

  useEffect(() => {
    const userData = localStorage.getItem("username");
    if (!userData) {
      navigation("/login");
    }
  }, [navigation]);

  useEffect(() => {
    if (sortedbyName) {
      setFilteredData(sortedbyName);
    }
    if (sortByAge) {
      setFilteredData(sortByAge);
    }
  }, [sortByAge, sortedbyName]);

  const shortByName = () => {
    setSortedbyName(
      filteredData.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    );
  };

  const shortByAge = () => {
    setSortByAge(
      filteredData.sort((a, b) => {
        return a.age - b.age;
      })
    );
  };

  return (
    <div className="tableContainer">
      <div className="btnContainer">
        <div>
          <InputGroup className="mb-3">
            <input
              type="text"
              placeholder="Search by name"
              onChange={(event) => setSearchInput(event.target.value)}
              value={searchInput}
            />
            <Button>Search</Button>
          </InputGroup>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          <Button onClick={shortByName}>Short by name</Button>
          <Button onClick={shortByAge}>Short by age</Button>
        </div>
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
