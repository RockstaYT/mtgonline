import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import axios from "axios";

function Set(props) {
  let history = useHistory();
  const [cards, setCards] = useState([]);

  const cardClicked = async (e) => {
    history.push(`/card`);

    await props.handleCard(e);
  };

  useEffect(() => {
    const requestParams = { setId: props.selectedSet.setId };

    axios
      .post(`http://localhost:3000/set/getcards`, requestParams)
      .then((res) => {
        setCards(res.data);
      });

    if (Object.keys(props.selectedSet).length == 0) {
      window.alert("Zurück an den Absender AMK");
      history.push("/");
    }
  }, []);

  return (
    <div className="setPage">
      <div className="setInfo">
        <div className="setName">{props.selectedSet.name}</div>
        <div className="realeaseDate">
          Release Date:{" "}
          {moment(props.selectedSet.releaseDate).format("DD.MM.YYYY")}
        </div>
      </div>

      <div className="setCards">
        <ul className="cardList">
          {cards.map((card) => (
            <li>
              <button onClick={() => cardClicked(card)}>{card.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Set;
