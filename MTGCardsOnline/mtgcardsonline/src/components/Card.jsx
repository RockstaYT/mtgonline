import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Chart from "chart.js";
import axios from "axios";
import moment from "moment";

function Card(props) {
  let history = useHistory();
  const [card, setCard] = useState([]);
  const [newestPrice, setNewestPrice] = useState([]);
  const [newestPriceFoil, setNewestPriceFoil] = useState([]);

  useEffect(() => {
    setCard(props.selectedCard);
    const requestParams = { cardId: props.selectedCard._id };

    const prices = [];
    const pricesfoil = [];
    const label = [];

    //chart test
    var ctx = document.getElementById("myChart");

    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            label: "Prices",
            data: prices,
            backgroundColor: ["rgba(0,0,0,0)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
          {
            label: "Prices Foil",
            data: pricesfoil,
            backgroundColor: ["rgba(0,0,0,0)"],
            borderColor: ["rgba(5, 5, 255, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });

    axios
      .post(`http://localhost:3000/card/getprices`, requestParams)
      .then((res) => {
        const prices = res.data[0];
        const pricesFoil = res.data[1];

        for (let price of prices) {
          myChart.data.datasets[0].data.push(price.price);
          myChart.data.labels.push(moment(price.date).format("DD.MM.YYYY"));
        }

        for (let priceFoil of pricesFoil) {
          myChart.data.datasets[1].data.push(priceFoil.price);
        }
        myChart.update();

        const lastPrice = lastItem(res.data[0]);
        const lastPriceFoil = lastItem(res.data[1]);
        setNewestPrice(lastPrice);
        setNewestPriceFoil(lastPriceFoil);
      });
    if (Object.keys(props.selectedCard).length == 0) {
      window.alert("Zurück an den Absender AMK");
      history.push("/");
    }
  }, []);

  return (
    <div className="cardInfo">
      <div className="cardName">{card.name}</div>
      <div className="cardImage">
        <img src={card.image}></img>
      </div>
      <div className="cardPrices">
        <div className="priceTrend">Price: {newestPrice.price} €</div>
        <div className="PriceTrendFoil">
          Foil Price Trend: {newestPriceFoil.price} €
        </div>
        <div className="lastUpdated">
          Last updated: {moment(newestPrice.date).format("DD.MM.YYYY")}
        </div>
      </div>

      <div className="priceChart">
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    </div>
  );
}

function lastItem(arr) {
  return arr.pop();
}

export default Card;
