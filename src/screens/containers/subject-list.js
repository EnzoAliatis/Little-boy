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
          name: 'Calculo Diferencial',
          classRoom: '301',
          teacher: 'Ing. Enzo Aliatis',
          email: 'enzo@gmail.com',
          parallel: '5º A'
        },
        {
          id: 2,
          name: 'Fisica',
          classRoom: '302',
          teacher: 'Ing. Cristiano Ronaldo',
          email: 'cr7@gmail.com',
          parallel: '5º B'
        },
        {
          id: 3,
          name: 'Quimica',
          classRoom: '303',
          teacher: 'Ing. Leonel Messi',
          email: 'leonelmessi@gmail.com',
          parallel: '5º A'
        },
        {
          id: 4,
          name: 'Programacion Mobil',
          classRoom: '304',
          teacher: 'Ing. Neymar JR',
          email: 'neymarjr_jr@gmail.com',
          parallel: '4º A'
        },
        {
          id: 5,
          name: 'Biologia',
          classRoom: '305',
          teacher: 'Ing. Maradona',
          email: 'maradonadiosdelfutbol@gmail.com',
          parallel: '5º B'
        },
        {
          id: 6,
          name: 'Ingenieria de Software',
          classRoom: 'Lab 201',
          teacher: 'Ing. Armando Paredes',
          email: 'juan.sendon@live.uleam.edu.ec',
          parallel: '5º B'
        }
      ]
    }
  }


  goToSubject = item => {
    console.log(item)
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'SubjectDescription',
        params: {
          title: item.name,
          classRoom: item.classRoom,
          teacher: item.teacher,
          email: item.email,
          parallel: item.parallel
        }
      })
    )
  }
  keyExtractor = item => item.id.toString()
  renderEmpty = () => <Empty text="Cargando las materias..." />
  renderItem = ({ item }) => (
    <PillComponent
      pillName={item.name}
      onPress={() => this.goToSubject(item)}
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
