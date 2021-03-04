import "../Styles/CharacterList.scss";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const dataCharacter = props.data.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  console.log(dataCharacter);
  const characters = dataCharacter.map((character) => {
    return (
      <li key={character.id} className="characterList__elements">
        <CharacterCard data={character}>
          <img
            className="characterList__elements--img"
            src={character.image}
            alt={"image " + character.name}
          />
          <h3 className="characterList__elements--name">{character.name}</h3>
          <h4 className="characterList__elements--specie">
            {character.species}
          </h4>
        </CharacterCard>
      </li>
    );
  });

  return <ul className="characterList">{characters}</ul>;
};

export default CharacterList;
