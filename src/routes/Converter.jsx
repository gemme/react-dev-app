import "./Converter.css";
import { useEffect, useState } from "react";
import axios from "axios";

export function Converter(/* props */) {
  const [result, setResult] = useState("converted");
  const [amount, setAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [currencies, setCurrencies] = useState({});
  useEffect(() => {
    async function getCurrencies() {
      const response = await fetch("http://localhost:3000/currencies", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setCurrencies(data);
      console.log(currencies);
    }
    getCurrencies();
  }, []);

  useEffect(() => {
    async function callConversion() {
      // es conveniente hacer fetch directamente
      const { data } = await axios.get(
        `http://localhost:3000/currencies/base/${baseCurrency}/target/${targetCurrency}`,
      );
      console.log(data);
      //const { rate } = await response.json();

      setResult(amount * data.rate); // converted amount
    }
    if (baseCurrency && targetCurrency && amount) {
      callConversion();
    }
  }, [amount, baseCurrency, targetCurrency]);

  return (
    <div className="root-container">
      <div className="search-currency">
        <input
          type="text"
          value={amount}
          placeholder="Amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <span>{result}</span>
      </div>
      <div className="currencies-container">
        <div className="selectors">
          <select
            name="basecurrency"
            id="basecurrency"
            onChange={(event) => {
              setBaseCurrency(event.target.value);
            }}
          >
            {Object.entries(currencies).map(([key, value]) => {
              return (
                <option key={key} value={key}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <div className="selectors">
          <select
            name="targetcurrency"
            id="targetcurrency"
            onChange={(event) => {
              setTargetCurrency(event.target.value);
            }}
          >
            {Object.entries(currencies).map(([key, value]) => {
              return (
                <option key={key} value={key}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
