import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingScreen from '../components/loading-screen'
import LoginLayout from '../components/login-layout';

import { fetchUserIfNeeded } from '../../../actions/index'

class LoginContainerV2 extends Component {

  state = {
    userCedula: '',
    userPassword: ''
  }

  handlerSubmit = async () => {
    await this.props.fetchUserIfNeeded(this.state.userCedula, this.state.userPassword)
    console.log(this.props.data)
    // TODO: Hacer las verificaciones
    // Aqui hacer la verificacion de si los datos o credenciales son aceptados
    if (Object.keys(this.props.data).length !== 0) {
      this.props.navigation.navigate('App')
    } else {
      this.props.navigation.navigate('Login')
    }
  }

  getUserCedula = (cedula) => {
    this.setState({ userCedula: cedula })
  }
  getUserPassword = (password) => {
    this.setState({ userPassword: password })
  }


  render() {
    console.log(this.props.state)
    return (
      this.props.isFetching ? (<LoadingScreen />) :
        (<LoginLayout
          getUserCedula={this.getUserCedula}
          getUserPassword={this.getUserPassword}
          onPress={this.handlerSubmit}
        />)
    )
  }
}


const mapStateToProps = state => ({
  data: state.infoUser.data,
  isFetching: state.infoUser.isFetching,
  didInvalid: state.infoUser.didInvalid,
  state: state
})

const mapDispatchToProps = dispatch => ({
  fetchUserIfNeeded: (cedula, password) => dispatch(fetchUserIfNeeded()),
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainerV2)
