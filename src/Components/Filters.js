import "../Styles/Filters.scss";

const Filters = (props) => {
  const hadleForm = (ev) => {
    ev.preventDefault();
  }; //No creo que esté funcionando correctamente
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    props.handleSearch(inputValue);
  };
  return (
    <form className="form" onChange={hadleForm}>
      <label htmlFor="search">
        <input
          className="inputFilter"
          name="search"
          type="text"
          onChange={handleInput}
        />
      </label>
    </form>
  );
};

export default Filters;
