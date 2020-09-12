import React from 'react';

import Header from '../../components/Header'
import Card from '../../components/Card'

import Trophy1 from '../../assets/images/trophy-1.png'
import Trophy2 from '../../assets/images/trophy-2.png'
import Versus from '../../assets/images/versus.png'

import './style.css'

function Result() {
  return (
    <>
      <Header description='Veja o resultado final da copa de forma simples e rápida' />
      <main>
        <div className='container'>
          <h2 className='title'>Resultado Final</h2>
          <div className='result'>
            <div className='result-item'>
              <Card image='https://escudosfc.com.br/images/ajax.png' name='Time 1' initials='Sigla 1' />
              <div className='result-trophy'>
                <p>1</p>
                <img src={Trophy1} alt='Primeiro Lugar' title='Primeiro Lugar' />
              </div>
            </div>
            <div className='result-versus'>
              <img src={Versus} alt='Versus' title='Versus' />
            </div>
            <div className='result-item'>
              <Card image='https://escudosfc.com.br/images/ajax.png' name='Time 1' initials='Sigla 1' />
              <div className='result-trophy'>
                <p>2</p>
                <img src={Trophy2} alt='Segundo Lugar' title='Segundo Lugar' />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Result;