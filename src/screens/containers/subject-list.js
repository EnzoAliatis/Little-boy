import React, { Component } from 'react'
import {
  FlatList,
  Text
} from 'react-native'

import SubjectListLayout from '../components/subject-list-layout'
import Empty from '../../utils/empty-list'
import Separator from '../../utils/separator-list'
import Subject from '../components/subject'
import { connect } from 'react-redux'

class SubjectList extends Component {
  state = {
    alumno: {
      nombre: 'Enzo Aliatis',
      listaMaterias: [
        {
          id: 1,
          name: 'Matematicas'
        },
        {
          id: 2,
          name: 'Fisica'
        },
        {
          id: 3,
          name: 'Quimica'
        }
      ]
    }
  }
  keyExtractor = item => item.id.toString()
  renderEmpty = () => <Empty text="Cargando las materias..." />
  itemSeparator = () => <Separator />
  renderItem = ({ item }) => (
    <Subject
      subjectName={item.name}
      onPress={() => { console.log(item) }}
    />
  )


  render() {
    return (
      <SubjectListLayout>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.alumno.listaMaterias}
          ListEmptyComponent={this.renderEmpty}
          itemSeparator={this.itemSeparator}
          renderItem={this.renderItem}
        >
        </FlatList>
      </SubjectListLayout>
    )
  }
}

export default SubjectList
