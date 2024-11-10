import React from 'react';
import "./Rightsection.css";
import { useLocation } from 'react-router-dom';

const Rightsection = ({values, handleInputChange, resetChange}) => {

  const {state} = useLocation();

  const currency = Number(state.currency);
  let currencyValue;

  if(currency === 1) {
    currencyValue = "INR";
  }
  else if(currency === 2) {
    currencyValue = "USD";
  }
  else if(currency === 3) {
    currencyValue = "EUR";
  }
  else if(currency === 4) {
    currencyValue = "GBP";
  }
  else if(currency === 5) {
    currencyValue = "AED";
  }


  return (
    <div className="rContainer">
      <div className="rContent rTop">
        <div>Years to show</div>
        <div className="rInput">
          <input name="pastYears" className="rInputBox" value={values.pastYears} onChange={e => handleInputChange(e)} required/>
          <label className="lab1">Past actual years(not modeled)</label>
          <input name="futureYears" className="rInputBox" value={values.futureYears} onChange={e => handleInputChange(e)} required/>
          <label className="lab2">Future years to model</label>
        </div>
      </div>
      <div className="rContent">
        <div>General</div>
        <div className="rInput">
          <input name="salaryIncrease" className="rInputBox" value={values.salaryIncrease} onChange={e => handleInputChange(e)} required/>
          <label className="lab1">Annual salary increase</label>
          <div className="percentTop pTop1 pTop3">&#37;</div>
          <input name="bonusTarget" className="rInputBox" value={values.bonusTarget} onChange={e => handleInputChange(e)} required/>
          <label className="lab2">Bonus target</label>
          <div className="percentTop pTop2">&#37;</div>
        </div>
      </div>
      <div className="rContent">
        <div>Equity refresh grant</div>
        <div className="rInput">
          <input name="grantAmount" className="rInputBox" value={values.grantAmount} onChange={e => handleInputChange(e)} required/>
          <label className="lab1">Grant amount</label>
          <div className="percentTop pTop1">{currencyValue}</div>
          <input name="grantIncrease" className="rInputBox" value={values.grantIncrease} onChange={e => handleInputChange(e)} required/>
          <label className="lab2">Annual grant increase</label>
          <div className="percentTop pTop2">&#37;</div>
        </div>
      </div>
      <div className="rContent">
        <div>Stock price</div>
        <div className="rInput">
          <input name="stockPrice" className="rInputBox" value={values.stockPrice} onChange={e => handleInputChange(e)} required/>
          <label className="lab1">GSU C price</label>
          <div className="percentTop pTop1">{currencyValue}</div>
          <input name="stockGrowth" className="rInputBox" value={values.stockGrowth} onChange={e => handleInputChange(e)} required/>
          <label className="lab2">Annual stock growth</label>
          <div className="percentTop pTop2">&#37;</div>
        </div>
      </div>
      <button className="rButton" onClick={e => resetChange(e)}>Reset All</button>
    </div>
  )
}

export default Rightsection