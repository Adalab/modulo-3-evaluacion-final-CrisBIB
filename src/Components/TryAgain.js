import "../Styles/TryAgain.scss";
import PropTypes from "prop-types";

const TryAgain = (props) => {
  const handleClick = () => {
    props.handleReset();
  };
  const renderGender = () => {
    let genderOption;
    switch (props.data.gender) {
      case "Female":
        genderOption = "mujer";
        break;
      case "Male":
        genderOption = "hombre";
        break;
      case "unknown":
        genderOption = "desconocido";
        break;
      default:
        genderOption = "desconocido";
    }
    return genderOption;
  };

  return (
    <main className="mainTryAgain">
      <p>
        No existe coincidencia con un personaje llamado{" "}
        {props.data.name.toUpperCase() || "X"} cuyo género es {renderGender()},
        que haya salido en el episodio {props.data.episode.toLowerCase()}.
      </p>
      <form>
        <input
          type="button"
          onClick={handleClick}
          value="Inténtalo de nuevo"
          className="button"
        ></input>
      </form>
    </main>
  );
};

export default TryAgain;

TryAgain.propTypes = {
  data: PropTypes.object,
  name: PropTypes.string,
  gender: PropTypes.string,
  episode: PropTypes.string,
};
