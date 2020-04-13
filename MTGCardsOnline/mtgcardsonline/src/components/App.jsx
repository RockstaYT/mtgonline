import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  const handleLogin = async (loginState) => {
    await setLogin(loginState);
    return;
  };

  return (
    <Router>
      <div className="App">
        <Navbar handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
        {/*         <Home />
        <Footer /> */}

        <Switch>
          <Route exact path="/">
            <Home />
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
