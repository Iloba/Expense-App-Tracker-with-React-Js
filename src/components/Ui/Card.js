import react from "react";
import "../Ui/Card.css";
function Card(props) {
  const Classes = "card " + props.className;
  return <div className={Classes}>{props.children}</div>;
}

export default Card;
