import "../Styles/App.scss";
import { Link, Route, Switch } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import LandingPage from "./LandingPage";

const App = () => {
  return (
    <div className="body">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/characterdetail">
          <CharacterDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
