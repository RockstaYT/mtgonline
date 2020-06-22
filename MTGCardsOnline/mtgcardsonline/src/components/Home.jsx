import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Home(props) {
  let history = useHistory();
  const [sets, setSets] = useState([]);

  const setClicked = async (e) => {
    if (e.cards.length == 0) {
      const requestParams = { setId: e.setId };

      await axios.post(
        `http://localhost:3000/set/create_all_cards`,
        requestParams
      );

      await axios.get(`http://localhost:3000/sets/getbyid`).then((res) => {
        e = res.data;
      });
    }
    history.push(`/set`);

    await props.handleSet(e);
  };

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
          {sets.map((set) => (
            <li>
              <button onClick={() => setClicked(set)}>{set.name}</button>
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
