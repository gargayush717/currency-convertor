import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Mainpage.css"

function Mainpage() {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencyRate, setCurrencyRate] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCurrencyRate = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_BjpWI1ayikhN6xJcWD1hZa4UUjeKPPR3I11G6Ket&currencies=INR&base_currency=USD");
        setCurrencyRate(response.data.data.INR);
      } catch (error) {
        console.error("Error fetching currency rate:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencyRate();
  }, []);

  const handleConvert = () => {
    if (currencyRate && amount) {
      const finalAmount = amount * currencyRate;
      setConvertedAmount(finalAmount.toFixed(2));
    }
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <div className="converter">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount in USD"
          className="input-field"
        />
        <button onClick={handleConvert} className="convert-button" disabled={loading}>
          {loading ? 'Converting...' : 'Convert'}
        </button>
      </div>
      {convertedAmount !== null && (
        <div className="result">
          <h2>Converted Amount: ₹{convertedAmount}</h2>
        </div>
      )}
    </div>
  );
}

export default Mainpage;