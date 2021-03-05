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
  const [data, setData] = useState(
    /*localStorageData || */ {
      name: "",
      gender: "Ambos",
    }
  );

  const handleSearch = (inputName, inputValue) => {
    setData({
      ...data,
      [inputName]: inputValue,
    });
    //ls.set("filterData", data);
  };

  const filterCharacters = characters
    .filter((character) =>
      character.name.toLowerCase().includes(data.name.toLowerCase())
    )
    .filter((character) =>
      data.gender === "Ambos" ? true : character.gender === data.gender
    );

  const renderDetail = (routeProps) => {
    const routIdCharacter = parseInt(routeProps.match.params.id);
    const foundCharacter = characters.find(
      (character) => character.id === routIdCharacter
    );
    if (foundCharacter) {
      return <CharacterDetail character={foundCharacter} />;
    } else return <PageNotFound />;
  };
  const handleReset = () => {
    setData({
      name: "",
      gender: "Ambos",
    });
  };
  return (
    <div className="App">
      <header className="header">
        <img
          className="header__logo"
          src={logoHeader}
          alt="Rick and Morty logo"
        />
      </header>
      <Switch>
        <Route exact path="/">
          <LandingPage
            data={data}
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
