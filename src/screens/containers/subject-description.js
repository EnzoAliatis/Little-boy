import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Linking
} from 'react-native'

import SubjectDescriptionLayout from '../components/subject-description-layout'
import Empty from '../../utils/empty-list'
import PillComponent from '../components/pill-component';

class SubjectDescription extends Component {

  state = {
    subjectOptions: [
      {
        name: 'Evaluaciones',
        route: 'EvaluationList'
      },
      {
        name: 'Materiales',
        route: 'MaterialList'
      },
      {
        name: 'Tareas',
        route: 'HomeworkList'
      },
      {
        name: 'Notificaciones',
        route: '',
      },
      {
        name: 'Faltas',
        route: ''
      }
    ]
  }
  goToOption = item => {
    console.log(item)
    if (item.route != '') {
      console.log(item.route)
      this.props.navigation.navigate(`${item.route}`)
    }
  }
  keyExtractor = (item, idx) => idx.toString()
  renderEmpty = () => <Empty text="Cargando las materias..." />
  renderItem = ({ item }) => (
    <PillComponent
      pillName={item.name}
      onPress={() => this.goToOption(item)}
    />

  )


  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title')
  })

  onEmailPress = () => {
    Linking.openURL(`mailto:${this.props.navigation.getParam('email')}`)
  }

  render() {
    return (
      <SubjectDescriptionLayout
        classRoom={this.props.navigation.getParam('classRoom')}
        parallel={this.props.navigation.getParam('parallel')}
        teacher={this.props.navigation.getParam('teacher')}
        email={this.props.navigation.getParam('email')}
        onEmailPress={this.onEmailPress}
      >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.subjectOptions}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
        />
      </SubjectDescriptionLayout >
    )
  }



}

export default SubjectDescription
