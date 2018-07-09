import React, { Component } from 'react'
import { FlatList } from 'react-native'

import HomeworkListLayout from '../components/homework-list-layout'
import Homework from '../components/homework'
import EmptyList from '../../utils/empty-list';


class HomeworckList extends Component {

  state = {
    tareas: [
      {
        id: 1,
        title: 'Realizar pagina 67',
        initDate: '1/02/2018',
        endDate: '5/02/2018',
        pdfUrl: 'urldelPDF',
        state: 'pendiente'
      },
      {
        id: 2,
        title: 'Trabajo Investigativo',
        initDate: '1/02/2018',
        endDate: '5/02/2018',
        pdfUrl: 'urldelPDF',
        state: 'pendiente'
      },
      {
        id: 3,
        title: 'Laboratorio 1',
        initDate: '1/02/2018',
        endDate: '5/02/2018',
        pdfUrl: 'urldelPDF',
        state: 'pendiente'
      },
      {
        id: 4,
        title: 'Reglas de Produccion',
        initDate: '1/02/2018',
        endDate: '5/02/2018',
        pdfUrl: 'urldelPDF',
        state: 'pendiente'
      },
    ]
  }

  static navigationOptions = () => ({
    title: 'Tareas'
  })

  keyExtractor = item => item.id.toString()
  renderEmpty = () => <EmptyList text="No tienes tareas registradas"/>
  goToHomework = item => {
    console.log(`Ir a ${item.title}`)
  }
  renderItem = ({ item }) => (
    <Homework
      title={item.title}
      onPress={() => console.log(item.pdfUrl)}
      initDate={item.initDate}
      endDate={item.endDate}
      state={item.state}
    />
  )

  render() {
    return (
      <HomeworkListLayout>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.tareas}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
        />
      </HomeworkListLayout>

    )
  }
}

export default HomeworckList