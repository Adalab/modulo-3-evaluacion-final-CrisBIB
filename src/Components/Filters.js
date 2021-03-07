import "../Styles/Filters.scss";
import PropTypes from "prop-types";

const Filters = (props) => {
  const hadleForm = (ev) => {
    ev.preventDefault();
  };
  const handleInput = (ev) => {
    ev.preventDefault();
    const inputName = ev.currentTarget.name;
    const inputValue = ev.target.value;
    props.handleSearch(inputName, inputValue);
  };
  return (
    <form className="form" onSubmit={hadleForm}>
      <label className="form__label" htmlFor="name"></label>
      <input
        className="form__inputs"
        placeholder="Busca por nombre"
        name="name"
        type="text"
        onChange={handleInput}
        value={props.data.name}
      />
      <div className="filtersContainer">
        <div className="genderContainer">
          <label className="form__labels">Busca por género</label>
          <select
            className="form__inputs form__inputs--selectGender"
            name="gender"
            id=""
            onChange={handleInput}
            value={props.data.gender}
          >
            <option className="form__options" value=""></option>
            <option className="form__options" value="Female">
              Mujer
            </option>
            <option className="form__options" value="Male">
              Hombre
            </option>
            <option className="form__options" value="unknown">
              Desconocido
            </option>
          </select>
        </div>
        <div className="episodeContainer">
          <label htmlFor="gender" className="form__labels">
            Busca por episodio
          </label>
          <select
            className="form__inputs form__inputs--selectEpisode"
            name="episode"
            id=""
            onChange={handleInput}
            value={props.data.episode}
          >
            {" "}
            className="form__options"
            <option className="form__options" value="Cualquiera">
              Cualquiera
            </option>
            <option className="form__options" value="1">
              Episodio 1
            </option>
            <option className="form__options" value="2">
              Episodio 2
            </option>
            <option className="form__options" value="3">
              Episodio 3
            </option>
            <option className="form__options" value="4">
              Episodio 4
            </option>
            <option className="form__options" value="5">
              Episodio 5
            </option>
            <option className="form__options" value="6">
              Episodio 6
            </option>
            <option className="form__options" value="7">
              Episodio 7
            </option>
            <option className="form__options" value="8">
              Episodio 8
            </option>
            <option className="form__options" value="9">
              Episodio 9
            </option>
            <option className="form__options" value="10">
              Episodio 10
            </option>
            <option className="form__options" value="11">
              Episodio 11
            </option>
            <option className="form__options" value="12">
              Episodio 12
            </option>
            <option className="form__options" value="13">
              Episodio 13
            </option>
            <option className="form__options" value="14">
              Episodio 14
            </option>
            <option className="form__options" value="15">
              Episodio 15
            </option>
            <option className="form__options" value="16">
              Episodio 16
            </option>
            <option className="form__options" value="17">
              Episodio 17
            </option>
            <option className="form__options" value="18">
              Episodio 18
            </option>
            <option className="form__options" value="19">
              Episodio 19
            </option>
            <option className="form__options" value="20">
              Episodio 20
            </option>
            <option className="form__options" value="21">
              Episodio 21
            </option>
            <option className="form__options" value="22">
              Episodio 22
            </option>
            <option className="form__options" value="23">
              Episodio 23
            </option>
            <option className="form__options" value="24">
              Episodio 24
            </option>
            <option className="form__options" value="25">
              Episodio 25
            </option>
            <option className="form__options" value="26">
              Episodio 26
            </option>
            <option className="form__options" value="27">
              Episodio 27
            </option>
            <option className="form__options" value="28">
              Episodio 28
            </option>
            <option className="form__options" value="29">
              Episodio 29
            </option>
            <option className="form__options" value="30">
              Episodio 30
            </option>
            <option className="form__options" value="31">
              Episodio 31
            </option>
            <option className="form__options" value="32">
              Episodio 32
            </option>
            <option className="form__options" value="33">
              Episodio 33
            </option>
            <option className="form__options" value="34">
              Episodio 34
            </option>
            <option className="form__options" value="35">
              Episodio 35
            </option>
            <option className="form__options" value="36">
              Episodio 36
            </option>
            <option className="form__options" value="37">
              Episodio 37
            </option>
            <option className="form__options" value="38">
              Episodio 38
            </option>
            <option className="form__options" value="39">
              Episodio 39
            </option>
            <option className="form__options" value="40">
              Episodio 40
            </option>
            <option className="form__options" value="41">
              Episodio 41
            </option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Filters;

Filters.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  episode: PropTypes.string,
};
