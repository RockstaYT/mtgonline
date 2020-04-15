import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Set(props) {
  let history = useHistory();

  useEffect(() => {
    if (Object.keys(props.selectedSet).length == 0) {
      window.alert("Zurück an den Absender AMK");
      history.push("/");
    }
  }, []);

  return (
    <div className="setPage">
      <div className="setInfo">
        <div className="setName">Throne of Eldraine</div>
        <div className="realeaseDate">Release Date: 20.20.2020</div>
      </div>

      <div className="setCards">
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
