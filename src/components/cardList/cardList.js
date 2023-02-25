import AxiosConfig from "../../axiosConfig";
import { useEffect, useState } from "react";
import CardView from "./card";

const CardList = () => {
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
    <div className="container">
      <div className="row">
        {tableData &&
          tableData.map((data, index) => (
            <div className="col-6 col-sm-4 col-md-4 col-lg-3" key={index}>
              <CardView cardData={data} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default CardList;
