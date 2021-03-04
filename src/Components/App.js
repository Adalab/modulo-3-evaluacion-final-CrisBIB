import "../Styles/App.scss";
import { Route, Switch } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import LandingPage from "./LandingPage";
import api from "../Services/api";
import React, { useState, useEffect } from "react";
import logoHeader from "../Images/logoR&M.png";
import "../Styles/Header.scss";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    api.getDataFromApi().then((dataApi) => {
      setCharacters(dataApi);
    });
  }, []);

  const renderDetail = (props) => {
    const idCard = parseInt(props.match.params.id);
    const selectCharacter = characters.find((character) => {
      return character.id === idCard;
    });
    return <CharacterDetail character={selectCharacter} />;
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
          <LandingPage data={characters} />
        </Route>
        <Route path="/characterdetail/:id" render={renderDetail} />
      </Switch>
    </div>
  );
};

export default App;
