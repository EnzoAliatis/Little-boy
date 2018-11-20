import React, { Component } from 'react'

import { connect } from 'react-redux'

import InitialLoadingLayout from '../../utils/components/initial-loading-layout'

class LoadingContainer extends Component {
  componentDidUpdate () {
    this.props.navigation.navigate((Object.keys(this.props.infoUser).length !== 0) ? 'Home' : 'Login')
  }
  render () {
    return (
      <InitialLoadingLayout />
    )
  }
}

function mapStateToProps (state) {
  return {
    infoUser: state.infoUser.data
  }
}

export default connect(mapStateToProps)(LoadingContainer)
