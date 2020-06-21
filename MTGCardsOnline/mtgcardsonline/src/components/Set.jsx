import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

function Set(props) {
  let history = useHistory();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(props.selectedSet.name);
    console.log(cards);
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
        <ul>
          {cards.map((card) => (
            <li>
              <div>test</div>
            </li>
          ))}
        </ul>

        <ul className="cardList">
          <li>Card one</li>
          <li>Card two</li>
          <li>Card Three</li>
        </ul>
      </div>
    </div>
  );
}

export default Set;
