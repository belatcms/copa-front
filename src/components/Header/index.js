import React from 'react';
import Logo from '../../assets/images/logo.png'

import './style.css'

function Header(props) {
  return (
    <header className='header'>
      <div className='container'>
        <img src={Logo} alt='Copa' title='Copa' />
        <p>{props.description}</p>
      </div>
    </header>
  )
}

export default Header;