import React, { Component } from 'react'
import {
  FlatList,
} from 'react-native'

import SubjectListLayout from '../components/subject-list-layout'
import Empty from '../../utils/empty-list'
import SeparatorList from '../../utils/separator-list'
import PillComponent from '../components/pill-component'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class SubjectList extends Component {
  state = {
    alumno: {
      nombre: 'Enzo Aliatis',
      listaMaterias: [
        {
          id: 1,
          name: 'Matematicas',
          classRoom: '301',
          teacher: 'Ing. Enzo Aliatis'
        },
        {
          id: 2,
          name: 'Fisica',
          classRoom: '302',
          teacher: 'Ing. Cristiano Ronaldo'
        },
        {
          id: 3,
          name: 'Quimica',
          classRoom: '303',
          teacher: 'Ing. Leonel Messi'
        },
        {
          id: 4,
          name: 'Programacion',
          classRoom: '304',
          teacher: 'Ing. Neymar JR'
        },
        {
          id: 5,
          name: 'Biologia',
          classRoom: '305',
          teacher: 'Ing. Maradona'
        }
      ]
    }
  }


  goToSubject = item => {
    console.log("Aqui")
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'SubjectDescription'
      })
    )
  }
  keyExtractor = item => item.id.toString()
  renderEmpty = () => <Empty text="Cargando las materias..." />
  renderItem = ({ item }) => (
    <PillComponent
      subjectName={item.name}
      onPress={this.goToSubject}
    />
  )


  render() {
    return (
      <SubjectListLayout>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.alumno.listaMaterias}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
        >
        </FlatList>
      </SubjectListLayout>
    )
  }
}

export default connect()(SubjectList)
