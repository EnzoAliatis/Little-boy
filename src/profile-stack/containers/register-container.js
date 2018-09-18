import React, { Component } from 'react'
import { Alert } from 'react-native'


import RegisterLayout from '../components/register-layout'

class RegisterContainer extends Component {

  buttonOnPress = () => {
    Alert.alert(
      '¿Ya planificó sus matrículas ?',
      'De no ser así, lea las materias abiertas',
      [
        { text: 'Canelar', style: 'destructive' },
        { text: 'Empezar', onPress: () => this.props.navigation.navigate('RegisterModule')}
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <RegisterLayout
        bottonOnPress={this.buttonOnPress}
      />
    )
  }
}


export default RegisterContainer
