import Filters from "./Filters";
import CharacterList from "./CharacterList";
import "../Styles/LandingPage.scss";
import ls from "../Services/LocalStorage";
import React, { useState } from "react";

const LandingPage = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);
  };
  const filterCharacters = props.data.filter((character) =>
    character.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main className="main">
      <Filters handleSearch={handleSearch} />
      <CharacterList data={filterCharacters} />
    </main>
  );
};

export default LandingPage;
