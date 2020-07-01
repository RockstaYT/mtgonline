import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Navbar(props) {
  let history = useHistory();
  const registerClicked = async (e) => {
    history.push(`/register`);
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

      {!props.isLoggedIn ? (
        <div className="loginModule">
          <button onClick={() => registerClicked()}>Register</button>
          <button>Login</button>
        </div>
      ) : (
        <div className="loginModule">
          <button>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
