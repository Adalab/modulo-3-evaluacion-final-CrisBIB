import "../Styles/CharacterList.scss";
// import { Link } from "react-router-dom";

const CharacterList = (props) => {
  const characters = props.data.map((character) => {
    return (
      <li key={character.id} className="characterList__elements">
        <img
          className="characterList__elements--img"
          src={character.image}
          alt={"image " + character.name}
        />
        <div>
          <h3 className="characterList__elements--name">{character.name}</h3>
          <h4 className="characterList__elements--specie">
            {character.species}
          </h4>
        </div>
      </li>
    );
  });

  return <ul className="characterList">{characters}</ul>;
};

export default CharacterList;
