import "../Styles/CharacterCard.scss";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <article>
      <Link to={"/characterdetail/" + props.data.id}>{props.children}</Link>
    </article>
  );
};

export default CharacterCard;
