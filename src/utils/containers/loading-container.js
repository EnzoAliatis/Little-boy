import React, { Component } from 'react'

import { connect } from 'react-redux'

import InitialLoadingLayout from '../../utils/components/initial-loading-layout'

class LoadingContainer extends Component {
  componentDidMount () {
    // TODO: Evaluar cuando la peticion llega mala

    if (Object.keys(this.props.infoUser).length === 0) {
      this.props.navigation.navigate('Login')
    }

    if (Object.keys(this.props.infoUser).length !== 0) {
      this.props.navigation.navigate('Home')
    }
  }

  render () {
    return (
      <InitialLoadingLayout />
    )
  }
}

function mapStateToProps (state) {
  return {
    state: state,
    infoUser: state.infoUser.data,
    invalidStatus: state.infoUser.status.didInvalid
  }
}

export default connect(mapStateToProps)(LoadingContainer)
