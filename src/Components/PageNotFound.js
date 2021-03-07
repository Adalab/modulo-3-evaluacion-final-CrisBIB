import "../Styles/PageNotFound.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PageNotFound = (props) => {
  const handleClick = () => {
    props.handleReset();
  };
  return (
    <main className="mainNotFound">
      <p>El personaje que buscas no existe.</p>
      <Link to="/">
        <form>
          <input
            type="button"
            onClick={handleClick}
            value="Busca de nuevo"
            className="button"
          ></input>
        </form>
      </Link>
    </main>
  );
};

export default PageNotFound;
