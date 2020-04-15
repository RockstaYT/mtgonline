import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import Set from "./Set.jsx";
import Card from "./Card.jsx";

function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [selectedSet, setSet] = useState({});

  const handleLogin = async (loginState) => {
    await setLogin(loginState);
    return;
  };

  const handleSet = async (setState) => {
    await setSet(setState);
    return;
  };

  return (
    <Router>
      <div className="App">
        <Navbar handleLogin={handleLogin} isLoggedIn={isLoggedIn} />

        <Switch>
          <Route exact path="/">
            <Home handleSet={handleSet} />
          </Route>
          <Route path="/set">
            <Set selectedSet={selectedSet} />
          </Route>
          <Route path="/card">
            <Card />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
