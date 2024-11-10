import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';
import industries from '../assets/industries.json';
import occupations from '../assets/occupations.json';

const Form = () => {

  const [input, setInput] = useState("");
  
  let [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch(`https://api.orb-intelligence.com/3/search/?api_key=c66c5dad-395c-4ec6-afdf-7b78eb94166a&limit=5&name=${value}`).then((response) => response.json()).then((data) => { setResults(data.results);});
  };

  const handleChange = event => {
    setInput(event.target.value);
    hide2();
  };

  const handleClick = event => {
    event.preventDefault();
    fetchData(input);
  };

  function hide() {
    var v = document.getElementsByClassName("findButton");
    Array.from(v).forEach((x) => {
        x.style.display = "none";
    })
  }

  function hide2() {
    var v = document.getElementsByClassName("findButton");
    Array.from(v).forEach((x) => {
        x.style.display = "inline-block";
    })
  }


  const [input2, setInput2] = useState("");
  
  let [results2, setResults2] = useState([]);

  const fetchData2 = (value) => {
    fetch(`https://api.orb-intelligence.com/3/search/?api_key=c66c5dad-395c-4ec6-afdf-7b78eb94166a&limit=1&city=${value}`).then((response) => response.json()).then((data) => { setResults2(data.results);});
  };

  const handleChange2 = event => {
    setInput2(event.target.value);
    hide4();
  };

  const handleClick2 = event => {
    event.preventDefault();
    fetchData2(input2);
  };

  function hide3() {
    var v = document.getElementsByClassName("findButton2");
    Array.from(v).forEach((x) => {
        x.style.display = "none";
    })
  }

  function hide4() {
    var v = document.getElementsByClassName("findButton2");
    Array.from(v).forEach((x) => {
        x.style.display = "inline-block";
    })
  }

  const [results3, setResults3] = useState(industries);
  const [input3, setInput3] = useState("");

  const handleChange3 = event => {
    setInput3(event.target.value);
    setResults3(industries);
  };

  const [results4, setResults4] = useState(occupations);
  const [input4, setInput4] = useState("");

  const handleChange4 = event => {
    setInput4(event.target.value);
    setResults4(occupations);
  };

  const navigate = useNavigate();


  const handleSubmit = event => {
      event.preventDefault();
      const data = new FormData(event.target);
      navigate('/main', {state: Object.fromEntries(data)});
  };



  return (
    <div className="container" >
        <div className="Form">
            <div className="formTitle">Before we begin your journey, we need a few quick details from your end.</div>

            <form onSubmit={handleSubmit}>
                <div className="input-box ">
                    <label className="details ctcDetails">CTC&#42;</label>
                    <div className="ctcFlex">
                        <div className="perDiv">*Per</div>
                        <div className="ctcRowFlex">
                            <select name="currency" className="currencySelect" title="">
                                <option value="1">INR</option>
                                <option value="2">USD</option>
                                <option value="3">EUR</option>
                                <option value="4">GBP</option>
                                <option value="5">AED</option>
                            </select>
                            <input name="ctc" className="inputField ctcField" type="number" min="0" max="10000000000" step="1" placeholder="Your current CTC" title="" required />
                            <select name="period" className="perSelect" title="">
                                <option value="1">Year</option>
                                <option value="2">Month</option>
                            </select>
                        </div>
                        <div className="basePayDiv">*Base pay</div>
                    </div>
                </div>
                <div className="input-box">
                    <label className="details">Organization&#42;</label>
                    <input name="organization" className="inputField" type="text" placeholder="Your current Organization" title="" required value={input} onChange={handleChange}/>
                    <button className="findButton" onClick={handleClick} formNoValidate></button>
                    <button className="chooseButton"></button>
                    <div className="results-list">
                        {results.map((item) => (<div className="searchResult" key={item.orb_num} onClick={() => {setInput(item.name); fetchData(" "); hide();}}>{item.name}</div>))}
                    </div>
                </div>
                <div className="input-box">
                    <label className="details">Experience&#42;</label>
                    <select name="experience" className="inputSelect" required title="">
                        <option value="" selected hidden disabled>Years of Experience</option>
                        <option value="1">0&#8722;2</option>
                        <option value="2">2&#8722;5</option>
                        <option value="3">5&#8722;8</option>
                        <option value="4">8&#8722;11</option>
                        <option value="5">11&#8722;15</option>
                        <option value="6">&gt;15</option>
                    </select>
                </div>
                <div className="input-box">
                    <label className="details">City</label>
                    <input name="city" className="inputField" type="text" placeholder="Choose a city" title="" value={input2} onChange={handleChange2}/>
                    <button className="findButton2" onClick={handleClick2} formNoValidate></button>
                    <button className="chooseButton2"></button>
                    <div className="results-list">
                        {results2.map((item) => (<div className="searchResult" key={item.orb_num} onClick={() => {setInput2(item.city + " , " + item.country); fetchData2(" "); hide3();}}>{item.city + " , " + item.country}</div>))}
                    </div>
                </div>
                <div className="input-box">
                    <label className="details">Domain</label>
                    <input name="domain" className="inputField" type="text" placeholder="Choose a domain" title="" value={input3} onChange={handleChange3} />
                    <div className="results-list">
                        {results3.filter((value) => {
                        if (input3 === "" || (input3 === value.industry) ) { return null;}
                        else if( value.industry.toLowerCase().includes(input3.toLowerCase())) { return value;}
                        }).slice(0,4).map((item) => (<div className="searchResult" key={item.industry} onClick={() => {setInput3(item.industry); setResults3([]);}}>{item.industry}</div>))}
                    </div>
                </div>
                <div className="input-box">
                    <label className="details">Designation</label>
                    <input name="designation" className="inputField" type="text" placeholder="Choose a title" title="" value={input4} onChange={handleChange4} />
                    <div className="results-list">
                        {results4.filter((value) => {
                        if (input4 === "" || (input4 === value.occupation) ) { return null;}
                        else if( value.occupation.toLowerCase().includes(input4.toLowerCase())) { return value;}
                        }).slice(0,4).map((item) => (<div className="searchResult" key={item.occupation} onClick={() => {setInput4(item.occupation); setResults4([]);}}>{item.occupation}</div>))}
                    </div>
                </div>
                <div className="submit-button">
                    <input className="inputButton" type="submit" value="That's good, let's go!"/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form