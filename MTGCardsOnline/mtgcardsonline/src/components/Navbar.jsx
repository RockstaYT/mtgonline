import React, { useState, useEffect } from "react";

function Navbar(props) {
  const clickButton = async (e) => {
    await props.handleLogin(e);
  };

  return (
    <div className="header">
      <div className="logo">
        <a className="logo" href="./">
          MTG Cards Online
        </a>
      </div>
      <div className="searchbar">
        <input
          className="searchbar"
          type="text"
          placeholder="Search cards..."
        />
      </div>
      <div className="loginModule">
        <button className="loginButton">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
