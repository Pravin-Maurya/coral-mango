import AxiosConfig from "../axiosConfig";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [tableData, setTableData] = useState([]);

  const getTableData = async () => {
    try {
      const response = await AxiosConfig.get("/api/react-test");

      setTableData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTableData();
  }, []);
  return tableData;
};
export default useFetch;
