import React, { Component } from 'react'
import {
  FlatList,
  Linking
} from 'react-native'

import SubjectDescriptionLayout from '../components/subject-description-layout'
import Empty from '../../utils/empty-list'
import PillComponent from '../components/pill-component';
import { connect } from 'react-redux'
import { getMateria } from '../../../reducers/infoUser';
import { defineColor } from '../../utils/defineColorFunction'



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
        route: 'AdsList',
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
  goToOption = (item) => {
    if (item.route != '') {
      this.props.navigation.navigate(`${item.route}`, { materiaId: this.props.materia.id  })
    }
  }




  isFaltasPill = name => {
    if (name === 'Faltas') {
      return this.props.materia.faults.toString()
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

  onEmailPress = () => {
    Linking.openURL(`mailto:${this.props.materia.email}`)
  }

  render() {
    return (
      <SubjectDescriptionLayout
        classRoom={this.props.materia.classroom}
        parallel={this.props.materia.parallel}
        teacher={this.props.materia.teacherName}
        email={this.props.materia.teacherEmail}
        onEmailPress={this.onEmailPress}
        colorPanel={defineColor(this.props.materia.formation)}
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

const mapStateToProps = (state, props) => ({
  materia: getMateria(state, props.navigation.getParam('idMateria'))
})


export default connect(mapStateToProps)(SubjectDescription)
