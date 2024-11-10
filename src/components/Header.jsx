import React from 'react'

import logo from '../assets/finanzo-logo.png';

const Header = () => {


  return (
    <div className='header'>
      <img src={logo} alt="logo" className='logo' />
      <h1 className='title'>finanzo</h1>
    </div>
  )
}

export default Header