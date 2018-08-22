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
          name: 'Metodos Numericos',
          classRoom: '301',
          teacher: 'Ing. Enzo Aliatis',
          email: 'enzo@gmail.com',
          parallel: '5º A',
          formation: 'basica'
        },
        {
          id: 2,
          name: 'Bases De Datos Distribuidas',
          classRoom: '302',
          teacher: 'Ing. Cristiano Ronaldo',
          email: 'cr7@gmail.com',
          parallel: '5º B',
          formation: 'profesional'
        },
        {
          id: 3,
          name: 'Contabilidad I',
          classRoom: '303',
          teacher: 'Ing. Leonel Messi',
          email: 'leonelmessi@gmail.com',
          parallel: '5º A',
          formation: 'basica'
        },
        {
          id: 4,
          name: 'Sistemas Expertos II',
          classRoom: '304',
          teacher: 'Ing. Neymar JR',
          email: 'neymarjr_jr@gmail.com',
          parallel: '4º A',
          formation: 'profesional'
        },
        {
          id: 5,
          name: 'Redes De Computadoras I',
          classRoom: '305',
          teacher: 'Ing. Maradona',
          email: 'maradonadiosdelfutbol@gmail.com',
          parallel: '5º B',
          formation: 'basica'
        },
        {
          id: 6,
          name: 'Cultura Fisica',
          classRoom: 'Lab 201',
          teacher: 'Ing. Armando Paredes',
          email: 'juan.sendon@live.uleam.edu.ec',
          parallel: '5º B',
          formation: 'humana'
        },
        {
          id: 7,
          name: 'Socioeconomia De Manabí y El Ecuador',
          classRoom: 'Lab 201',
          teacher: 'Ing. Juan Perez',
          email: 'juan.perez@live.uleam.edu.ec',
          parallel: '6º B',
          formation: 'curricular'
        },
        {
          id: 8,
          name: 'Optativa I Cetificacion',
          classRoom: 'Lab 201',
          teacher: 'Ing. Damian Dias',
          email: 'damiand@live.uleam.edu.ec',
          parallel: '7º B',
          formation: 'optativa'
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
          parallel: item.parallel,
          formation: item.formation
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