import React, { Component } from 'react'
import {
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
        route: 'EvaluationList',
        FontAwesomeIcon: 'file-text'
      },
      {
        name: 'Materiales',
        route: 'MaterialList',
        FontAwesomeIcon: 'briefcase'
      },
      {
        name: 'Tareas',
        route: 'HomeworkList',
        FontAwesomeIcon: 'book'
      },
      {
        name: 'Anuncios',
        route: '',
        FoundationIcon: 'megaphone',
      },
      {
        name: 'Faltas',
        route: '',
        FontAwesomeIcon: 'exclamation-triangle',
        colorIcon: '#F6D817'
      }
    ]
  }
  goToOption = item => {
    if (item.route != '') {
      this.props.navigation.navigate(`${item.route}`)
    }
  }


  defineTitle = title => {
    const shortTitle = title.substr(0, title.indexOf(' '))
    return shortTitle
  }

  defineColor = formation => {
    let color
    switch (formation) {
      case 'basica':
        return color = '#E8D246'

      case 'profesional':
        return color = '#9CBA5F'

      case 'optativa':
        return color = '#BE5150'

      case 'humana':
        return color = '#B4C6DB'

      case 'curricular':
        return color = '#F5964F'

      default:
        return color = '#9CBA5F'
    }
  }

  isFaltasPill = name => {
    if(name === 'Faltas') {
      return this.props.navigation.getParam('faults')
    }
  }
  

  keyExtractor = (item, idx) => (item + idx).toString()
  renderEmpty = () => <Empty text="Cargando las materias..." />
  renderItem = ({ item }) => (
    <PillComponent
      pillName={item.name}
      onPress={() => this.goToOption(item)}
      FontAwesomeIcon={item.FontAwesomeIcon}
      FoundationIcon={item.FoundationIcon}
      colorIcon={item.colorIcon}
      number={this.isFaltasPill(item.name)}
    />
  )


  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
    headerTruncatedBackTitle: navigation.getParam('title').substr(0, navigation.getParam('title').indexOf(' '))
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
        colorPanel={this.defineColor(this.props.navigation.getParam('formation'))}
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
