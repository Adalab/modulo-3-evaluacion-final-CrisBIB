import logoHeader from "../Images/logoR&M.png";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import "../Styles/LandingPage.scss";
import ls from "../Services/LocalStorage";
import React, { useState, useEffect } from "react";
import api from "../Services/api";

const LandingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.getDataFromApi().then((dataApi) => {
      setData(dataApi);
    });
  }, []);

  const handleSearch = (value) => {
    const searchText = value.toLowerCase();
    const characters = data.filter((character) =>
      character.name.toLowerCase().includes(searchText)
    );
    setData(characters);
  };

  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          src={logoHeader}
          alt="Rick and Morty logo"
        />
      </header>
      <main className="main">
        <Filters handleSearch={handleSearch} />
        <CharacterList data={data} />
      </main>
    </>
  );
};

export default LandingPage;