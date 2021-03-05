import Filters from "./Filters";
import CharacterList from "./CharacterList";
import "../Styles/LandingPage.scss";
import TryAgain from "./TryAgain";

const LandingPage = (props) => {
  console.log(props);
  if (props.characters.length === 0) {
    return (
      <>
        <Filters
          data={props.data}
          characters={props.characters}
          handleSearch={props.handleSearch}
          handleReset={props.handleReset}
        />
        <TryAgain text={props.data.name} handleReset={props.handleReset} />
      </>
    );
  }

  return (
    <main className="main">
      <Filters
        data={props.data}
        characters={props.characters}
        handleSearch={props.handleSearch}
        handleReset={props.handleReset}
      />
      <CharacterList data={props.characters} />
    </main>
  );
};

export default LandingPage;
