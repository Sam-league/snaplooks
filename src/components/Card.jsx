import "./card.css";

let name = "aman";
const Card = (props) => {
  return (
    <div className="card" style={{ backgroundColor: props.bgColor }}>
      <img src={props.src} alt="" />
      <div>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
      </div>
    </div>
  );
};

export default Card;
