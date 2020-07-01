import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function Register(props) {
  let history = useHistory();
  const [unametaken, setUnametaken] = useState("");

  const checkName = async (e) => {
    //check if name alredy is taken, display error
    const requestParams = {
      username: document.getElementById("usernameInput").value,
    };

    await axios
      .post("http://localhost:3000/username", requestParams)
      .then((res) => {
        if (res.data) {
          setUnametaken("This Username is alredy taken.");
        } else {
          setUnametaken("");
        }
      });
  };

  const register = async (e) => {
    if (!unametaken) {
      const username = document.getElementById("usernameInput").value;
      const pw1 = document.getElementById("pw1Input").value;
      const pw2 = document.getElementById("pw2Input").value;

      if (pw1 !== pw2) {
        alert("The passwords do not match!");
      } else {
        const requestParams = { uname: username, pw: pw1 };
        await axios
          .post(`http://localhost:3000/register`, requestParams)
          .then(async (res) => {
            if (res.status === 200) {
              await props.handleUser(res.data);
              await props.handleLogin(true);
              history.push(`/`);
            }
          });
      }
    } else {
      alert("The Username is alredy taken!");
    }
  };

  return (
    <div className="register">
      <ul className="registerList">
        <li>
          <label htmlFor="uname">Username: </label>
          <input
            type="uname"
            id="usernameInput"
            onBlur={() => {
              checkName();
            }}
          />
          <div>{unametaken}</div>
        </li>
        <li>
          <label For="pw1">Password: </label>
          <input type="pw1" id="pw1Input" />
        </li>
        <li>
          <label For="pw2">Repeat Password: </label>
          <input type="pw2" id="pw2Input" />
        </li>
        <li>
          <button onClick={() => register()}>Submit</button>
        </li>
      </ul>
    </div>
  );
}

export default Register;
