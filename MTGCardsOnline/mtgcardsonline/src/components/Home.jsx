import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Home(props) {
  let history = useHistory();

  const selectSet = async (e) => {
    await props.hadleSet(e);
  };

  const [sets, setSets] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/sets/getall`).then((res) => {
      const allsets = arrayRotate(res.data);
      setSets(allsets);
    });
  }, []);

  return (
    <div className="home">
      <div className="set_display">
        <ul>
          {sets.map((sets) => (
            <li>
              <button onClick={() => history.push("/set") /*selectSet(sets)*/}>
                {sets.name}
              </button>
              {/* <a href="./Set">{sets.name}</a> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="new_cards">This part is still empty.</div>
    </div>
  );
}

function arrayRotate(arr) {
  var array_lenght = arr.lenght;
  let new_array = [];
  for (var element of arr) {
    new_array.splice(array_lenght - 1, 0, element);
    array_lenght--;
  }

  return new_array;
}

export default Home;
