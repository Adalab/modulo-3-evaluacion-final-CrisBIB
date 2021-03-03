import "../Styles/Filters.scss";

const Filters = () => {
  return (
    <form className="form">
      <label htmlFor="search">
        <input className="inputFilter" name="search" type="text" />
      </label>
    </form>
  );
};

export default Filters;
