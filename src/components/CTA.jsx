import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import Aos from 'aos'
import 'aos/dist/aos.css'

const CTA = () => {

  useEffect(()=>{
    Aos.init({duration: 1500})
  }, [])

  return (
    <div className="cta">
        <h1 data-aos='fade-up' data-aos-offset="0" className="mainText">Finanzo is an attempt to assist you in understanding your income over a period of time and in gaining insights over your standing 
        wrt to your peers. Its completely anonymous for the base level calculations needed. <span className='gradText'>And before we forget to mention, its free !</span></h1>
        <p data-aos='fade-up' data-aos-delay='100' data-aos-offset="0" className="secondText">Want to give it a shot?</p>
        <Link to="/form" style={{ textDecoration: 'none' }}>
        <button data-aos='fade-up' data-aos-delay='250' data-aos-offset="0" className="btn btnOne">
        <span className="btnText">GET STARTED</span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>
        </button>
        </Link>
    </div>
  )
}

export default CTA