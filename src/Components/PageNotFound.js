import "../Styles/PageNotFound.scss";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <Link className="comeBack" to="/">
        <i className="fas fa-chevron-right"></i> Volver
      </Link>
    </div>
  );
};

export default PageNotFound;
