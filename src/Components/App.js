import "../Styles/App.scss";
import { Route, Switch } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import PageNotFound from "./PageNotFound";
import LandingPage from "./LandingPage";
import api from "../Services/api";
import React, { useState, useEffect } from "react";
import logoHeader from "../Images/logoR&M.png";
import "../Styles/Header.scss";

const App = () => {
  useEffect(() => {
    api.getDataFromApi().then((dataApi) => {
      setCharacters(dataApi);
    });
  }, []);
  const [characters, setCharacters] = useState([]);

  console.log(characters);

  //const localStorageData = ls.get("filterData");
  const [filters, setFilters] = useState(
    /*localStorageData || */ {
      name: "",
      gender: "",
      episode: "Cualquiera",
      status: "",
    }
  );

  const handleSearch = (inputName, inputValue) => {
    setFilters({
      ...filters,
      [inputName]: inputValue,
    });
    //ls.set("filterData", data);
  };

  const filterCharacters = characters
    .filter((character) =>
      character.name.toLowerCase().includes(filters.name.toLowerCase())
    )
    .filter((character) => {
      return filters.gender === "" ? true : character.gender === filters.gender;
    })
    .filter((character) =>
      filters.episode === "Cualquiera"
        ? true
        : character.episode.find(
            (episode) =>
              episode ===
              `https://rickandmortyapi.com/api/episode/${filters.episode}`
          )
    )
    .filter((character) => {
      return filters.status === "" ? true : character.status === filters.status;
    });
  const renderDetail = (routeProps) => {
    const routIdCharacter = parseInt(routeProps.match.params.id);
    const foundCharacter = characters.find(
      (character) => character.id === routIdCharacter
    );
    if (foundCharacter) {
      return <CharacterDetail character={foundCharacter} />;
    } else return <PageNotFound handleReset={handleReset} />;
  };
  const handleReset = () => {
    setFilters({
      name: "",
      gender: "",
      episode: "Cualquiera",
      status: "",
    });
  };
  return (
    <div className="App">
      <header className="header">
        <img
          className="header__logo"
          src={logoHeader}
          alt="Rick y Morty logo"
        />
      </header>
      <Switch>
        <Route exact path="/">
          <LandingPage
            data={filters}
            characters={filterCharacters}
            handleSearch={handleSearch}
            handleReset={handleReset}
          />
        </Route>
        <Route path="/characterdetail/:id" render={renderDetail} />
      </Switch>
    </div>
  );
};

export default App;
