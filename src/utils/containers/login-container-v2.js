import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingScreen from '../components/loading-screen'
import LoginLayout from '../components/login-layout';

import { fetchUserIfNeeded } from '../../../actions/index'
import { verifyAccessData } from '../functions/verify-access'


class LoginContainerV2 extends Component {

  state = {
    userCedula: '',
    userPassword: ''
  }

  handlerSubmit = async () => {
    await this.props.fetchUserIfNeeded(this.state.userCedula, this.state.userPassword)
    // TODO: Hacer las verificaciones
    // Aqui hacer la verificacion de si los datos o credenciales son aceptados
    this.props.navigation.navigate(verifyAccessData(this.props.data) ? 'App' : 'Login')
  }

  getUserCedula = (cedula) => {
    this.setState({ userCedula: cedula })
  }
  getUserPassword = (password) => {
    this.setState({ userPassword: password })
  }

  componentDidMount = () => {
    this.props.navigation.navigate(verifyAccessData(this.props.data) ? 'App' : 'Login')
  }


  render() {
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
  didInvalid: state.infoUser.didInvalid
})

const mapDispatchToProps = dispatch => ({
  fetchUserIfNeeded: (cedula, password) => dispatch(fetchUserIfNeeded(cedula, password)),
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainerV2)
