import React, { Component } from 'react'

import { connect } from 'react-redux'

import InitialLoadingLayout from '../../utils/components/initial-loading-layout'
import LoginContainer from './login-container'

class LoadingContainer extends Component {
  componentDidMount () {
    console.log(this.props.state)
    console.log(this.props.infoUser)
    console.log(this.props.fetchStatus)

    this.decidePage()
  }

  decidePage () {
    setTimeout(() => {
      if (Object.keys(this.props.infoUser).length === 0) {
        this.props.navigation.navigate('Login')
      }
  
      if (Object.keys(this.props.infoUser).length !== 0) {
        this.props.navigation.navigate('Home')
      }
    }, 2000)
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
    fetchStatus: state.infoUser.status.isFetching,
    invalidStatus: state.infoUser.status.didInvalid
  }
}

export default connect(mapStateToProps)(LoadingContainer)
