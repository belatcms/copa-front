import React from 'react';

import './style.css'

function Card(props) {
  return (
    <div
      onClick={props.onClick}
      className={`
        card
        ${props.active ? 'active' : ''}
        ${props.disabled ? 'disabled' : ''}
      `}
    >
      <img src={props.image} alt=''/>
      <h4>{props.name}</h4>
      <p>{props.initials}</p>
      {
        props.check && <span className='check'></span>
      }
    </div>
  )
}

export default Card;