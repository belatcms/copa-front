import React from 'react';
import { useLocation } from 'react-router-dom'

import Header from '../../components/Header'
import Card from '../../components/Card'

import Trophy1 from '../../assets/images/trophy-1.png'
import Trophy2 from '../../assets/images/trophy-2.png'
import Versus from '../../assets/images/versus.png'

import './style.css'

function Result() {
  const location = useLocation()
  const firstTeam = location.state.firstTeam
  const secondTeam = location.state.secondTeam

  return (
    <>
      <Header
        back={true}
        description='Veja o resultado final da copa de forma simples e rápida'
      />
      <main>
        <div className='container'>
          <h2 className='title'>Resultado Final</h2>
          <div className='result'>
            <div className='result-item'>
              <Card check={false} image={firstTeam.image} name={firstTeam.nome} initials={firstTeam.sigla} />
              <div className='result-trophy'>
                <p>1</p>
                <img src={Trophy1} alt='Primeiro Lugar' title='Primeiro Lugar' />
              </div>
            </div>
            <div className='result-versus'>
              <img src={Versus} alt='Versus' title='Versus' />
            </div>
            <div className='result-item'>
              <Card check={false} image={secondTeam.image} name={secondTeam.nome} initials={secondTeam.sigla} />
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