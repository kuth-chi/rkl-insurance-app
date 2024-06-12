// components/Currency.js
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState('£');

  const handleCurrencyChange = (event) => {
    const currency = event.target.getAttribute('data-value');
    setSelectedCurrency(currency);
    dispatch({
      type: 'CHG_CURRENCY',
      payload: {
        currency
      }
    });
  };

  return (
    <div className="btn-group ">
      <button
        type="button"
        className="btn btn-success btn-lg dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
       Currency: {selectedCurrency}
      </button>
      <ul className="dropdown-menu alert-success">
        <li><button className="dropdown-item" data-value="£" onClick={handleCurrencyChange}>UK(£)</button></li>
        <li><button className="dropdown-item" data-value="₹" onClick={handleCurrencyChange}>India(₹)</button></li>
        <li><button className="dropdown-item" data-value="€" onClick={handleCurrencyChange}>Europe(€)</button></li>
        <li><button className="dropdown-item" data-value="៛" onClick={handleCurrencyChange}>KHR(៛)</button></li>
        <li><button className="dropdown-item" data-value="CAD" onClick={handleCurrencyChange}>Canada(CAD)</button></li>
      </ul>
    </div>
  );
};

export default Currency;
