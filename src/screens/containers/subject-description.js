import React, { Component } from 'react'
import { 
  View,
  Text
} from 'react-native'

import SubjectDescriptionLayout from '../components/subject-description-layout'

class SubjectDescription extends Component {

  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('title')
  })

  goToHomework = () => {
    this.props.navigation.navigate('HomeworkList')
  }

  

  render() {
    return (
      <SubjectDescriptionLayout
        classRoom={this.props.navigation.getParam('classRoom')}
        parallel={this.props.navigation.getParam('parallel')}
        teacher={this.props.navigation.getParam('teacher')}
        onPress={this.goToHomework}
        pillsName={['Evaluaciones','Materiales', 'Tareas', 'Faltas']}
      />
    )
  }


  
}

export default SubjectDescription
