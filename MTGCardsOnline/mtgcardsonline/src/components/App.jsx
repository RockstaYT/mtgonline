import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";

const test = require("../database/connectDb.js");

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  const handleLogin = async (loginState) => {
    await setLogin(loginState);
    return;
  };

  return (
    <div className="App">
      <Navbar handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
