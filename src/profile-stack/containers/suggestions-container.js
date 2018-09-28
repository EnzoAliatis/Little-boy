import React, { Component } from 'react'


import { Alert, Keyboard } from 'react-native'
import SuggestionsLayout from '../components/suggestionsLayout';



class SuggestionsContainer extends Component {

  state = {
    categories: [
      {
        value: 'Sugerencia',
      },
      {
        value: 'Reportar Problema',
      },
      {
        value: 'Reportar error ortográfico',
      }
    ],
    selected: ''
  }

  onReportSubmit = report => {
    Alert.alert(
      'Gracias por su ayuda',
      'Si esta listo para enviar su reporte, presione "enviar"',
      [
        {text: 'Cancelar', style: 'destructive'},
        {text: 'Enviar', onPress: () => this.props.navigation.navigate('Profile')}
      ]
    )
  }

  render() {
    return (
      <SuggestionsLayout
        categories={this.state.categories}
        onReportSubmit={this.onReportSubmit}
      />
    )
  }
}


export default SuggestionsContainer