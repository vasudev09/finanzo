import Leftsection from "../components/Leftsection";
import Rightsection from "../components/Rightsection";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

function Main() {
  
  const {state} = useLocation();

  const ctc = Number(state.ctc);
  const period = Number(state.period);


  let ctcValue;

  if(period===1){
    ctcValue = ctc;
  }
  else if(period===2) {
    ctcValue = ctc * 12;
  };


  const initialValues = {
    pastYears : "",
    futureYears : "",
    salaryIncrease : "",
    bonusTarget : "",
    grantAmount : "",
    grantIncrease : "",
    stockPrice : "" ,
    stockGrowth : ""
  };

  let Figures = {
    year : [],
    salary : [],
    bonus : [],
    equity : []
  };

  const [values, setValues] = useState(initialValues);
  const [fig, setFig] = useState(Figures);
  const [breakdown, setBreakdown] = useState(1);

  function changeBreakdown(event) {
    setBreakdown(event.target.value);
  }

 function resetChange (event) {
  setValues(initialValues);
 }

  function handleInputChange(event) {
    const value = event.target.value;
      setValues({
      ...values,
      [event.target.name]: value
    });
  };

  useEffect(() => {
    updateFigures();
  },[values, breakdown]);

  function updateFigures() {
    let year = 2023;
    let grant = 0;
    let stock = Number(values.stockPrice);
    if(values.futureYears<51 && values.salaryIncrease<201 && values.salaryIncrease>-101 && values.bonusTarget<201 && values.bonusTarget>-101 &&
      values.grantAmount<100000000 && values.grantAmount>-1 && values.grantIncrease<201 && values.grantIncrease>-101 && values.stockPrice<1000000 && values.stockPrice>-1
      && values.stockGrowth<201 && values.stockGrowth>-101) {
      for(let i=0; i<values.futureYears; i++) {
        if(i >= 1) {
        Figures.year[i] = year++;
        Figures.salary[i] = Math.round(Figures.salary[i-1]  + (Figures.salary[i-1] * (values.salaryIncrease/100)));
        Figures.bonus[i] = Math.round(Figures.salary[i-1] * (values.bonusTarget/100));
        }
        else {
        Figures.year[i] = year++;
        Figures.salary[i] = Math.round(ctcValue + (ctcValue * (values.salaryIncrease/100)));
        Figures.bonus[i] = Math.round(ctcValue * (values.bonusTarget/100));
        }
        grant = grant + (values.grantAmount * (values.grantIncrease/100));
        Figures.equity[i] = Math.round(grant * (stock *(values.stockGrowth/100)));
        stock = stock + (stock * (values.stockGrowth/100));
      }
    };
    if(breakdown == 2) {
      Figures.bonus = [];
      Figures.equity = [];
    }
    else if(breakdown == 3) {
      Figures.salary = [];
      Figures.equity =[];
    }
    else if(breakdown == 4) {
      Figures.salary = [];
      Figures.bonus =[];
    }
    setFig(Figures);
  };

  return (
    <div className="mainPageFlex">
      <Leftsection fig={fig} breakdown={breakdown} changeBreakdown={changeBreakdown} />
      <Rightsection values={values} handleInputChange={handleInputChange} resetChange={resetChange}/>
    </div>
  );
}

export default Main;