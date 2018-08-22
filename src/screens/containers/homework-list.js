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
        pdfUrl: 'https://aulavirtual.uleam.edu.ec/xisce/docs/cursos/Lista%20de%20Materiales%20para%20pr%C3%A1ctica%20de%20laboratorio-1526296739.pdf',
        state: 'Revisado',
        grade: '10.00'
      },
      {
        id: 2,
        title: 'Trabajo Investigativo',
        initDate: '1/02/2018',
        endDate: '5/02/2018',
        pdfUrl: 'https://aulavirtual.uleam.edu.ec/xisce/docs/cursos/SISTEMAS%20DIGITALES-1526292443.pdf',
        state: 'Pendiente',
        grade: ''
      },
      {
        id: 3,
        title: 'Laboratorio 1',
        initDate: '1/02/2018',
        endDate: '5/02/2018',
        pdfUrl: 'error',
        state: 'No enviado',
        grade: ''
      },
      {
        id: 4,
        title: 'Reglas de Produccion',
        initDate: '1/02/2018',
        endDate: '5/02/2018',
        pdfUrl: 'https://aulavirtual.uleam.edu.ec/xisce/docs/cursos/%C3%81LGEBRA%20DE%20BOOLE%20Y%20SIMPLIFICACI%C3%93N%20L%C3%93GICA-1526292289.pdf',
        state: 'Caducado',
        grade: '0'
      },
    ]
  }

  defineColor = (state) => {
    if (state === 'Pendiente') {
      return '#3ABEFF'
    } else if (state === 'Revisado') {
      return '#38E86F'
    } else if (state === 'No enviado') {
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
  renderEmpty = () => <EmptyList text="No tienes tareas registradas" />
  goToHomework = item => {
    this.props.navigation.navigate('PdfContainer', {
      pdfUrl: item.pdfUrl
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