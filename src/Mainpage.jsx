import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mainpage.css";

function Mainpage() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [currencies, setCurrencies] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_BjpWI1ayikhN6xJcWD1hZa4UUjeKPPR3I11G6Ket"
      )
      .then(function (response) {
        setCurrencies(response.data.data); // currencies is an object with details
      })
      .catch(function () {
        setError("Failed to load currency list.");
      });
  }, []);

  function handleConvert() {
    if (!amount || isNaN(amount)) {
      setError("Please enter a valid number for amount.");
      setConvertedAmount(null);
      return;
    }
    setError("");
    setLoading(true);

    axios
      .get(
        `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_BjpWI1ayikhN6xJcWD1hZa4UUjeKPPR3I11G6Ket&currencies=${toCurrency}&base_currency=${fromCurrency}`
      )
      .then(function (response) {
        const rate = response.data.data[toCurrency];
        if (!rate) {
          setError("Conversion rate not found.");
          setConvertedAmount(null);
        } else {
          const result = amount * rate;
          setConvertedAmount(result.toFixed(2));
        }
      })
      .catch(function () {
        setError("Error fetching conversion rate.");
        setConvertedAmount(null);
      })
      .finally(function () {
        setLoading(false);
      });
  }

  const currencyCodes = Object.keys(currencies);

  return (
    <div
      className="container my-5 p-4 bg-white rounded shadow-sm"
      style={{ maxWidth: "480px" }}
    >
      <h1 className="text-center mb-4">Currency Converter</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="form-control"
          value={amount}
          onChange={function (e) {
            setAmount(e.target.value);
          }}
          placeholder="Enter amount"
        />
      </div>

      <div className="row g-3 mb-3">
        <div className="col-6">
          <label htmlFor="fromCurrency" className="form-label">
            From
          </label>
          <select
            id="fromCurrency"
            className="form-select"
            value={fromCurrency}
            onChange={function (e) {
              setFromCurrency(e.target.value);
            }}
          >
            {currencyCodes.map(function (code) {
              return (
                <option key={code} value={code}>
                  {code} - {currencies[code].name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-6">
          <label htmlFor="toCurrency" className="form-label">
            To
          </label>
          <select
            id="toCurrency"
            className="form-select"
            value={toCurrency}
            onChange={function (e) {
              setToCurrency(e.target.value);
            }}
          >
            {currencyCodes.map(function (code) {
              return (
                <option key={code} value={code}>
                  {code} - {currencies[code].name}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <button
        className="btn btn-success w-100"
        onClick={handleConvert}
        disabled={loading}
      >
        {loading ? "Converting..." : "Convert"}
      </button>

      {convertedAmount !== null && (
        <div className="alert alert-info mt-4 text-center fs-4">
          {amount} {fromCurrency} = <strong>{convertedAmount} {toCurrency}</strong>
        </div>
      )}
    </div>
  );
}

export default Mainpage;
