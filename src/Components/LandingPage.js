import Filters from "./Filters";
import CharacterList from "./CharacterList";
import "../Styles/LandingPage.scss";
import TryAgain from "./TryAgain";
import PropTypes from "prop-types";

const LandingPage = (props) => {
  if (props.characters.length === 0) {
    return (
      <>
        <Filters
          data={props.data}
          characters={props.characters}
          handleSearch={props.handleSearch}
          handleReset={props.handleReset}
        />
        <TryAgain data={props.data} handleReset={props.handleReset} />
      </>
    );
  }

  const handleClick = () => {
    props.handleReset();
  };

  return (
    <main className="main">
      <Filters
        data={props.data}
        characters={props.characters}
        handleSearch={props.handleSearch}
        handleReset={props.handleReset}
      />
      <form className="buttonContainer">
        <button onClick={handleClick} className="buttonReset">
          Limpiar filtros
        </button>
      </form>
      <CharacterList data={props.characters} />
    </main>
  );
};

export default LandingPage;

LandingPage.propTypes = {
  data: PropTypes.object,
  characters: PropTypes.array,
};
