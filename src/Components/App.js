import "../Styles/App.scss";
import { Route, Switch } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import LandingPage from "./LandingPage";
import api from "../Services/api";
import React, { useState, useEffect } from "react";

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
