import React, { Component } from 'react'

import { connect } from 'react-redux'

import InitialLoadingLayout from '../../utils/components/initial-loading-layout'

class LoadingContainer extends Component {
  componentDidMount () {
    console.log(this.props.state)
    if (Object.keys(this.props.infoUser).length === 0) {
      this.props.navigation.navigate('Login')
    }
    // if (Object.keys(this.props.infoUser).length !== 0) {
    //   this.props.navigation.navigate('Home')
    // }
  }
  
  // componentWillMount () {
  //   console.log(this.props.state)
  //   // if (Object.keys(this.props.infoUser).length === 0) {
  //   //   this.props.navigation.navigate('Login')
  //   // }
  // }
  componentDidUpdate () {
    console.log('Se esta actualizando')
    console.log(this.props.state)
    console.log('Se actualizo')
    if (Object.keys(this.props.infoUser).length === 0) {
      this.props.navigation.navigate('Login')
    }
    // if (Object.keys(this.props.infoUser).length !== 0) {
    //   this.props.navigation.navigate('Home')
    // }
  }
  render () {
    return (
      <InitialLoadingLayout />
    )
  }
}

function mapStateToProps (state) {
  return {
    infoUser: state.infoUser.data,
    invalidStatus: state.infoUser.status.didInvalid,
    state: state
  }
}

export default connect(mapStateToProps)(LoadingContainer)
