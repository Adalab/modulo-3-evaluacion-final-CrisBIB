import "../Styles/CharacterList.scss";
// import { Link } from "react-router-dom";

const CharacterList = (props) => {
  const characters = props.data.map((character) => {
    return (
      <li key={character.id}>
        <img src={character.image} alt={"image " + character.name} />
        <h3>{character.name}</h3>
        <h4>{character.species}</h4>
      </li>
    );
  });

  return <ul>{characters}</ul>;
};

export default CharacterList;
