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
import Register from "./Register.jsx";

function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [selectedSet, setSet] = useState({});
  const [selectedCard, setCard] = useState({});

  const handleLogin = async (loginState) => {
    await setLogin(loginState);
    return;
  };

  const handleSet = async (setState) => {
    await setSet(setState);
    return;
  };

  const handleCard = async (setState) => {
    await setCard(setState);
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
            <Set selectedSet={selectedSet} handleCard={handleCard} />
          </Route>
          <Route path="/card">
            <Card selectedCard={selectedCard} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
