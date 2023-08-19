import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import axios from "axios";
import { SingleCoin } from "../../component/config/api";
import CoinInfo from "../../component/CoinInfo/CoinInfo";
import "../CoinPage/CoinPage.css";
import { LinearProgress, Typography } from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import { numberWithCommas } from "../../component/Banner/Carousel";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setcoin] = useState();
  const { currency, Symbol } = CryptoState();
  console.log(currency);

  const fetchcoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setcoin(data);
  };

  useEffect(() => {
    fetchcoin();
  }, []);

  if (!coin) return <LinearProgress sx={{ backgroundColor: "gold" }} />;

  return (
    <div className="container">
      <div className="sidebar">
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200px"
          style={{ marginBottom: "20px" }}
        />
        <Typography
          variant="h3"
          className="heading"
          sx={{ fontFamily: "Montserrat" }}
        >
          {coin?.name}
        </Typography>
        <Typography className="descriptions" variant="subTitle1">
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}
        </Typography>
        <div className="Marketdata">
          <span style={{ display: "flex" }}>
            <Typography variant="h5">Rank:</Typography>
            &nbsp;&nbsp;
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h5">
              {coin?.market_cap_rank}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5">Current Price:</Typography>
            &nbsp;&nbsp;
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h5">
              {Symbol}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5">Market Cap:</Typography>
            &nbsp;&nbsp;
            <Typography sx={{ fontFamily: "Montserrat" }} variant="h5">
              {Symbol}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
