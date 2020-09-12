import React from 'react';

import './style.css'

function Card(props) {
  return (
    <div className='card'>
      <img src={props.image} alt=''/>
      <h4>{props.name}</h4>
      <p>{props.initials}</p>
      <span className='check'></span>
    </div>
  )
}

export default Card;