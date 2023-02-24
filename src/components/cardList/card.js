import "./card.css";
const CardView = (prop) => {
  const { name, age, occupation } = prop.cardData;
  return (
    <div className="card">
      <div className="">
        <img src="/avatar.png" className="image" alt="img" />
      </div>
      <h1>{name}</h1>
      <p className="occupation">{occupation}</p>
      <p className="age">{age} Years</p>
    </div>
  );
};
export default CardView;
