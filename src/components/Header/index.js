import React from 'react';
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import BackIcon from '../../assets/images/back-icon.png'

import './style.css'

function Header(props) {
  return (
    <header className='header'>
      <div className='container'>
        {
          props.back && (
            <Link className='header-link' to='/'>
              <img src={BackIcon} alt='Voltar' title='Voltar' />
            </Link>
          )
        }
        <Link to='/'>
          <img src={Logo} alt='Copa' title='Copa' />
        </Link>
        <p>{props.description}</p>
      </div>
    </header>
  )
}

export default Header;