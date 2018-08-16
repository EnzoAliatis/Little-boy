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
        state: 'Revisado',
        grade: '10.00'
      },
      {
        id: 2,
        title: 'Trabajo Investigativo',
        initDate: '1/02/2018',
        endDate: '5/02/2018',
        pdfUrl: 'urldelPDF',
        state: 'Pendiente',
        grade: ''
      },
      {
        id: 3,
        title: 'Laboratorio 1',
        initDate: '1/02/2018',
        endDate: '5/02/2018',
        pdfUrl: 'urldelPDF',
        state: 'No enviado',
        grade: ''
      },
      {
        id: 4,
        title: 'Reglas de Produccion',
        initDate: '1/02/2018',
        endDate: '5/02/2018',
        pdfUrl: 'urldelPDF',
        state: 'Caducado',
        grade: '0'
      },
    ]
  }

  static navigationOptions = () => ({
    title: 'Tareas'
  })

  defineColor = (state) => {
    if(state === 'Pendiente' ) {
      return '#3ABEFF'
    } else if (state === 'Revisado') {
      return '#38E86F'
    } else if(state === 'No enviado') {
      return '#F7DD16'
    }
    else {
      return '#F9344D'
    }
  }

  defineGradeColor = grade => {
    if (grade) {
      return grade
    } else {
      return '-'
    }
  }


  keyExtractor = item => item.id.toString()
  renderEmpty = () => <EmptyList text="No tienes tareas registradas"/>
  goToHomework = item => {
    this.props.navigation.navigate('PdfContainer', {
      pdfUrl: item.title
    })
  }
  renderItem = ({ item }) => (
    <Homework
      title={item.title}
      onPress={() => this.goToHomework(item)}
      initDate={item.initDate}
      endDate={item.endDate}
      state={item.state}
      grade={this.defineGradeColor(item.grade)}
      color={this.defineColor(item.state)}
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