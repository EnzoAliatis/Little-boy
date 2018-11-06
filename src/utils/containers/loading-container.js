import React, { Component } from 'react';

import { connect } from 'react-redux';

import InitialLoadingLayout from '../../utils/components/initial-loading-layout';
import { fetchInfoUserIfNeeded, fetchInfoUser } from '../../../actions'

class LoadingContainer extends Component {
  componentDidMount () {
    console.log(this.props.state)
    this.props.fetchInfoUserIfNeeded()
    // this.props.fetchInfoUser()

    setTimeout(() => {
      console.log(this.props.state)
    }, 4000)

    // setTimeout(() => {
    //   if (this.props.user) {
    //     this.props.navigation.navigate('App');
    //   } else {
    //     this.props.navigation.navigate('Login');
    //   }
    // }, 1000)
  }
  render () {
    return <InitialLoadingLayout />
  }
}

function mapStateToProps (state) {
  return {
    user: state.userLoading,
    status: state.infoUser.status,
    infoUser: state.infoUser.data,
    state: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchInfoUserIfNeeded: () => dispatch(fetchInfoUserIfNeeded()),
    fetchInfoUser: () => dispatch(fetchInfoUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingContainer)
