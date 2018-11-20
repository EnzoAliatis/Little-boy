import React, { Component } from 'react'
import {
  FlatList
} from 'react-native'


import EvaluationListLayout from '../components/evaluation-list-layout'
import EvaluationListItem from '../components/evaluation-list-item'
import EmptyList from '../../utils/empty-list';
import SeparatorList from '../../utils/separator-list'

class EvaluationList extends Component {

  state = {
    notas: [
      {
        id: 1,
        parcial: 1,
        componente: "Actividades doncencia",
        mecanismo: "Reactivo",
        evaluacion: 9.52
      },
      {
        id: 2,
        parcial: 1,
        componente: "Trabajo Autonomo",
        mecanismo: "Informe",
        evaluacion: 9.23
      },
      {
        id: 3,
        parcial: 1,
        componente: "Practica y experimentacion",
        mecanismo: "Rubrica",
        evaluacion: 9.44
      },
      {
        id: 4,
        parcial: 1,
        componente: "Evaluacion Final",
        mecanismo: "Reactivo",
        evaluacion: 9.34
      },
      {
        id: 5,
        parcial: 2,
        componente: "Actividades doncencia",
        mecanismo: "Reactivo",
        evaluacion: 9.99
      },
      {
        id: 6,
        parcial: 2,
        componente: "Trabajo Autonomo",
        mecanismo: "Informe",
        evaluacion: 9.00
      },
      {
        id: 7,
        parcial: 2,
        componente: "Practica y experimentacion",
        mecanismo: "Rubrica",
        evaluacion: 0.00
      },
      {
        id: 8,
        parcial: 2,
        componente: "Evaluacion Final",
        mecanismo: "Reactivo",
        evaluacion: 9.24
      }
    ]

  }



  defineAverage = (nota1, nota2) => (parseInt(nota1,10) +parseInt(nota2,10))
  defineColor = (nota1, nota2) => {
    let average = this.defineAverage(nota1, nota2)

    if (average >= 14) {
      return '#38E86F'
    } else if (average >= 10 && average < 14) {
      return '#F6D817'
    } else if (average < 10){
      return '#F9644D'
    } else {
      return '#3ABEFF'
    }
  }
  


  keyExtractor = item => item.id.toString()
  renderEmpty = () => <EmptyList text="No hay Evaluaciones a mostrar" />
  itemSeparator = () => <SeparatorList />
  renderItem = ({ item }) => (
    <EvaluationListItem
      componente={item.componente}
      mecanismo={item.mecanismo}
      evaluacion={item.evaluacion}
    />
  )


  render() {
    const scores = this.props.navigation.getParam('scores')
    const totalScores = scores[0]+scores[1]
    // Aqui inteta sacarlo del Redux
    
    return (
      <EvaluationListLayout
        average1={scores[0]}
        average2={scores[1]}
        colorPanel={this.defineColor(scores[0],scores[1])}
      >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.notas}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.itemSeparator}
          ListFooterComponent={
          <EvaluationListItem 
          componente='Nota Final' 
          evaluacion={totalScores}
          />}
        />
      </EvaluationListLayout>

    )
  }
}


export default EvaluationList