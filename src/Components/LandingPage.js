import logoHeader from "../Images/logoR&M.png";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import "../Styles/LandingPage.scss";
import ls from "../Services/LocalStorage";
import React, { useState, useEffect } from "react";

const LandingPage = () => {
  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          src={logoHeader}
          alt="Rick and Morty logo"
        />
      </header>
      <main className="App">
        <Filters />
        <CharacterList />
      </main>
    </>
  );
};

export default LandingPage;
