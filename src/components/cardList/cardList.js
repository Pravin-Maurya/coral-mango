import CardView from "./card";
import useFetch from "../fetchdata";
import { useEffect } from "react";
import useAuth from "../useAuth";
import { useNavigate } from "react-router-dom";

const CardList = () => {
  const auth = useAuth();

  const tableData = useFetch();
  const navigation = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigation("/login");
    }
  }, [auth, navigation]);

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
