import CardView from "./card";
import useFetch from "../fetchdata";

const CardList = () => {
  const tableData = useFetch();

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
