import logoHeader from "../Images/logoR&M.png";
import "../Styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logoHeader}
        alt="Rick and Morty logo"
      />
    </header>
  );
};

export default Header;
