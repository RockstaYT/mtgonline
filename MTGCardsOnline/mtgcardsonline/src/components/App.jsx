import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import history from "./history.jsx";

function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [selectedSet, setSet] = useState([]);

  const handleLogin = async (loginState) => {
    await setLogin(loginState);
    return;
  };

  const hadleSet = async (setState) => {
    await setSet(setState);
    return;
  };

  return (
    <Router history={history}>
      <div className="App">
        <Navbar handleLogin={handleLogin} isLoggedIn={isLoggedIn} />

        <Switch>
          <Route exact path="/">
            <Home hadleSet={hadleSet} />
          </Route>
          <Route path="/Set">
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
