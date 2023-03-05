import CardView from "./card";
import useFetch from "../fetchdata";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const CardList = () => {
  const tableData = useFetch();
  const navigation = useNavigate();

  // useEffect(() => {
  //   const userData = localStorage.getItem("username");
  //   if (userData) {
  //     navigation("/login");
  //   }
  // }, []);

  return (
    <div className="container">
      <div className="row">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {tableData &&
            tableData.map((data, index) => (
              <div className="col-6 col-sm-4 col-md-4 col-lg-3" key={index}>
                <CardView cardData={data} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default CardList;
