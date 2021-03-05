import "../Styles/CharacterDetail.scss";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  console.log(props.character);
  return (
    <main className="mainDetails">
      <div className="container">
        <Link className="comeBack" to="/">
          <i className="fas fa-chevron-right"></i> Volver
        </Link>
        <article className="characterDetails">
          <a href={props.character.image} target="_blank">
            <img
              className="characterDetails__img"
              src={props.character.image}
              alt={"image " + props.character.name}
            />
          </a>
          <div className="characterDetails__elements">
            <h3 className="characterDetails__elements__name">
              {props.character.name}
            </h3>
            <p>
              Status:{" "}
              <span className="characterDetails__elements__item">
                {props.character.status}
              </span>
            </p>
            <p>
              Specie:{" "}
              <span className="characterDetails__elements__item">
                {props.character.species}
              </span>
            </p>
            <p>
              Origin:{" "}
              <span className="characterDetails__elements__item">
                {props.character.origin.name}
              </span>
            </p>
            <p>
              Episodes:{" "}
              <span className="characterDetails__elements__item">
                {props.character.episode.length}
              </span>
            </p>
          </div>
        </article>
      </div>
    </main>
  );
};

export default CharacterDetail;
