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

    promedio1: 9,
    promedio2: 10,

    notas: [
      {
        id: 1,
        parcial: 1,
        componente: "Actividades doncencia",
        mecanismo: "Reactivo",
        evaluacion: 9
      },
      {
        id: 2,
        parcial: 1,
        componente: "Trabajo Autonomo",
        mecanismo: "Informe",
        evaluacion: 9
      },
      {
        id: 3,
        parcial: 1,
        componente: "Practica y experimentacion",
        mecanismo: "Rubrica",
        evaluacion: 9
      },
      {
        id: 4,
        parcial: 1,
        componente: "Evaluacion Final",
        mecanismo: "Reactivo",
        evaluacion: 9
      },
      {
        id: 5,
        parcial: 2,
        componente: "Actividades doncencia",
        mecanismo: "Reactivo",
        evaluacion: 9
      },
      {
        id: 6,
        parcial: 2,
        componente: "Trabajo Autonomo",
        mecanismo: "Informe",
        evaluacion: 9
      },
      {
        id: 7,
        parcial: 2,
        componente: "Practica y experimentacion",
        mecanismo: "Rubrica",
        evaluacion: 9
      },
      {
        id: 8,
        parcial: 2,
        componente: "Evaluacion Final",
        mecanismo: "Reactivo",
        evaluacion: 9
      }
    ]

  }




  keyExtractor = item => item.id.toString()
  renderEmpty = () => <EmptyList text="No hay Evaluaciones a mostrar" />
  itemSeparator = () => <SeparatorList />
  renderItem = ({ item }) => (
    <EvaluationListItem
      parcial={item.parcial}
      componente={item.componente}
      mecanismo={item.mecanismo}
      evaluacion={item.evaluacion}
    />
  )


  render() {
    return (
      <EvaluationListLayout
        average1={this.state.promedio1}
        average2={this.state.promedio2}
      >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.notas}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.itemSeparator}

        />
      </EvaluationListLayout>

    )
  }
}


export default EvaluationList