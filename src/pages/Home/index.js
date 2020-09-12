import React from 'react';

import GenerateIcon from '../../assets/images/generate-icon.png'

import Header from '../../components/Header'
import Card from '../../components/Card'

import './style.css'

function Home() {
  return (
    <>
      <Header description='Selecione 8 equipes que você deseja para a competição e depois pressione o botão GERAR COPA para prosseguir' />
      <main>
        <div className='container'>
          <div className='sub-header'>
            <div className='selected-squad'>
              <p>Selecionados</p>
              <span>0 de 8 equipes</span>
            </div>
            <h2>Fase de Seleção</h2>
            <button>
              <img src={GenerateIcon} alt='Ícone' title='Ícone' />
              Gerar Copa
            </button>
          </div>
          <div className='card-list'>
            <Card image='https://escudosfc.com.br/images/ajax.png' name='Time 1' initials='Sigla 1' />
            <Card image='https://escudosfc.com.br/images/atalanta.png' name='Time 2' initials='Sigla 2' />
            <Card image='https://escudosfc.com.br/images/atl.png' name='Time 3' initials='Sigla 3' />
            <Card image='https://escudosfc.com.br/images/barca.png' name='Time 4' initials='Sigla 4' />
            <Card image='https://escudosfc.com.br/images/ajax.png' name='Time 1' initials='Sigla 1' />
            <Card image='https://escudosfc.com.br/images/atalanta.png' name='Time 2' initials='Sigla 2' />
            <Card image='https://escudosfc.com.br/images/atl.png' name='Time 3' initials='Sigla 3' />
            <Card image='https://escudosfc.com.br/images/barca.png' name='Time 4' initials='Sigla 4' />
            <Card image='https://escudosfc.com.br/images/ajax.png' name='Time 1' initials='Sigla 1' />
            <Card image='https://escudosfc.com.br/images/atalanta.png' name='Time 2' initials='Sigla 2' />
            <Card image='https://escudosfc.com.br/images/atl.png' name='Time 3' initials='Sigla 3' />
            <Card image='https://escudosfc.com.br/images/barca.png' name='Time 4' initials='Sigla 4' />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;