import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Chart from "chart.js";
import axios from "axios";
import moment from "moment";

function Register(props) {
  return (
    <div className="register">
      <ul className="registerList">
        <li className="username">
          <div>username</div>
        </li>
        <li>
          <div>pw</div>
        </li>
        <li>
          <div>email</div>
        </li>
      </ul>
    </div>
  );
}

export default Register;
