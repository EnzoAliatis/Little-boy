import React, { Component } from 'react'

import { connect } from 'react-redux'

import InitialLoadingLayout from '../../utils/components/initial-loading-layout'

class LoadingContainer extends Component {
  componentDidMount () {
    setTimeout(() => {
      console.log(this.props.status)
      if (Object.keys(this.props.infoUser).length !== 0) {
        console.log(this.props.infoUser)
        this.props.navigation.navigate('App')
      } else {
        this.props.navigation.navigate('Login')
      }
    }, 2000)
  }
  render () {
    return <InitialLoadingLayout />
  }
}

function mapStateToProps (state) {
  return {
    infoUser: state.infoUser.data,
    status: state.infoUser.status
  }
}

export default connect(mapStateToProps)(LoadingContainer)
