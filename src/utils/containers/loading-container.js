import React, { Component } from 'react';

import { connect } from 'react-redux';
import InitialLoadingLayout from '../../main-stack/components/initial-loading-layout';

class LoadingContainer extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Login');
    }
  }
  render() {
    return <InitialLoadingLayout />
  }
}
function mapStateToProps(state) {
  return {
    user: state.userLoading
  }
}

export default connect(mapStateToProps)(LoadingContainer)