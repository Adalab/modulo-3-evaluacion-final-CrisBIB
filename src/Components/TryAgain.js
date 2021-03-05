import "../Styles/TryAgain.scss";

const TryAgain = (props) => {
  const handleClick = () => {
    props.handleReset();
  };
  return (
    <div>
      <p className="comeBack">
        No existe coincidencia con la palabra {props.text.toUpperCase()}
      </p>
      <form>
        <input
          type="button"
          onClick={handleClick}
          value="Inténtalo de nuevo"
        ></input>
      </form>
    </div>
  );
};

export default TryAgain;
