import React, { Component } from 'react'


import { Alert} from 'react-native'
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
    screens: [
      {
        value: 'Inicio',
      },
      {
        value: 'Perfil',
      },
      {
        value: 'Mis notas',
      },
      {
        value: 'Plantillas ',
      },
      {
        value: 'Contactos',
      },
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
        screens={this.state.screens}
        onReportSubmit={this.onReportSubmit}
      />
    )
  }
}


export default SuggestionsContainer