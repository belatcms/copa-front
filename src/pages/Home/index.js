import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

import GenerateIcon from '../../assets/images/generate-icon.png'

import api from '../../services/api'
import TeamsLogo from '../../assets/data/teams-logo.json'

import Header from '../../components/Header'
import Card from '../../components/Card'

import './style.css'

function Home() {
  const [ teams, setTeams ] = useState([])
  const [ selectedTeams, setSelectedTeams ] = useState([])
  const history = useHistory()

  useEffect(function() {
    function getTeams () {
      api.get('/equipes')
        .then(function(response) {
          setTeams(response.data)
        })
    }

    getTeams()
  }, [])

  function generateCup() {
    api.post('/equipe')
      .then(response => {
        const firstTeamLogo = TeamsLogo.find(function(team) {
          return team.id === response.data[0].id
        })
        
        const secondTeamLogo = TeamsLogo.find(function(team) {
          return team.id === response.data[1].id
        })

        history.push({
          pathname: '/result',
          state: {
            firstTeam: {
              ...response.data[0],
              image: firstTeamLogo.url
            },
            secondTeam: {
              ...response.data[1],
              image: secondTeamLogo.url
            }
          }
        })
      })
  }

  function toggleSelectedTeams (item) {
    const itemIndex =
      selectedTeams.findIndex(function(itemSelected) {
        return itemSelected.id === item.id
      })

    if (itemIndex > -1) {
      const filteredTeams = selectedTeams.filter(function(itemSelected) {
        return itemSelected.id !== item.id
      })
      setSelectedTeams(filteredTeams)
    } else {
      if (selectedTeams.length < 8) {
        setSelectedTeams([
          ...selectedTeams,
          item
        ])
      }
    }
  }

  return (
    <>
      <Header
        description='Selecione 8 equipes que você deseja para a competição e depois pressione o botão GERAR COPA para prosseguir'
      />
      <main>
        <div className='container'>
          <div className='sub-header'>
            <div className='selected-squad'>
              <p>Selecionados</p>
              <span>{selectedTeams.length} de 8 equipes</span>
            </div>
            <h2>Fase de Seleção</h2>
            <button
              disabled={selectedTeams.length < 8}
              onClick={generateCup}
              type='button'
            >
              <img src={GenerateIcon} alt='Ícone' title='Ícone' />
              Gerar Copa
            </button>
          </div>
          <div className='card-list'>
            {
              teams.map(function(item, index) {
                const foundItem = selectedTeams.find(function(itemSelected) {
                  return itemSelected.id === item.id
                })

                return (
                  <Card
                    key={item.id}
                    active={foundItem}
                    disabled={selectedTeams.length >= 8}
                    onClick={function() { toggleSelectedTeams(item) }}
                    check={true}
                    image={TeamsLogo[index].url}
                    name={item.nome}
                    initials={item.sigla}
                  />
                )
              })
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;