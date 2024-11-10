import React from 'react';
import "./Leftsection.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



const Leftsection = ({fig, breakdown, changeBreakdown}) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  ChartJS.defaults.elements.bar.borderRadius = 3;

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = fig.year;
  
  let i=0;
  let j=0;
  let k=0; 

  const data = {
    labels,
    datasets: [
      {
        label: 'Salary',
        data: labels.map(() => fig.salary[i++]),
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Bonus',
        data: labels.map(() => fig.bonus[j++]),
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Equity',
        data: labels.map(() => fig.equity[k++]),
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ],
  };


  return (
    <div className="lContainer">
      <div className="lContent">
          <div className="contentBox">
            <div>Compensation Breakdown : </div>
            <select title="" className="lContentSelect" value={breakdown} onChange={e => changeBreakdown(e)}>
              <option value="1">All</option>
              <option value="2">Salary</option>
              <option value="3">Bonus</option>
              <option value="4">Equity</option>
            </select>
          </div>
          <div className="contentBox">
            <div>Equity Value : </div>
            <select title="" className="lContentSelect lContentSelect2">
              <option value="1">Granted</option>
              <option value="2">Vested</option>
            </select>
          </div>
      </div>
      <div className="barChart"><Bar options={options} data={data} /></div>;
    </div>
  )
}

export default Leftsection