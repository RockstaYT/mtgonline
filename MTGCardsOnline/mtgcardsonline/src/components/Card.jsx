import React from "react";
import { Chart } from "react-charts";

function Card(props) {
  const data = React.useMemo(
    () => [
      {
        label: "Price",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: "Price Foil",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div className="cardInfo">
      <div className="cardName">Card Name</div>
      <div className="cardImage">
        <img src="//static.cardmarket.com/img/7c1e64a946edb7b2fc545d6fc9d35ba1/items/1/ELD/401294.jpg"></img>
      </div>
      <div className="cardPrices">
        <div className="priceTrend">Price:</div>
        <div className="PriceTrendFoil">Foil Price Trend:</div>
        <div className="lastUpdated">Last updated:</div>
      </div>

      <div className="priceChart">
        <Chart data={data} axes={axes} tooltip dark />
      </div>
    </div>
  );
}

export default Card;
