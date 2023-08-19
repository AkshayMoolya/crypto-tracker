import React, { useEffect, useState } from "react";
import { CryptoState } from "../../CryptoContext";
import axios from "axios";
import { HistoricalChart } from "../config/api";
import { CircularProgress, ThemeProvider, createTheme } from "@mui/material";
import "../CoinInfo/CoinInfo.css";
import { Line } from "react-chartjs-2";
import { chartDays } from "../config/data";
import SelectedButton from "../Button/SelectedButton";
import Chart from "chart.js/auto";

const CoinInfo = ({ coin }) => {
  const [historicalData, sethistoricalData] = useState();
  const [days, setdays] = useState(1);

  const { currency } = CryptoState();

  const fetchHistoricalData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    sethistoricalData(data.prices);
  };

  useEffect(() => {
    fetchHistoricalData();
  }, [currency, days]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      text: {
        primary: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="Container">
        {!historicalData ? (
          <CircularProgress sx={{ color: "gold" }} size={250} thickness={1} />
        ) : (
          <>
            <Line
              data={{
                labels: historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;

                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicalData.map((coin) => coin[1]),
                    label: `Price (Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectedButton
                  key={day.value}
                  onClick={() => setdays(day.value)}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectedButton>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
