import React, { useState, useEffect } from "react";

function Navbar(props) {
  const clickButton = async (e) => {
    await props.handleLogin(e);
  };

  return (
    <div className="header">
      <div className="logo">
        <a className="logo" href="./Home">
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

      {/*       {props.isLoggedIn ? (
        <div>Logged In</div>
      ) : (
        <div className="loginModule">
          <button className="loginButton" onClick={() => clickButton(true)}>
            Login
          </button>
        </div>
      )} */}
    </div>
  );
}

/**
 * parent -- he not care about your dick - fy
 * child1
 * child2 he has dick --> declare dick --> he now updates Hook -> IS NOT BIG DICK -> after update hook --> rerender everything with BIG DICK
 * child3 he maybe no need dick - we dont give a vagina
 * child4 he needs dick --> he update dick to BIG DICK
 */

export default Navbar;
