import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import { BackHandler } from 'react-native'

import AppNavigator from './app-navigator'
import { NavigationActions } from 'react-navigation'

const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root')

class AppNavigatorWithState extends ReduxifyApp {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    // cuando le piques al back de android
    this.props.dispatch(
      NavigationActions.back({
        key: null
      })
    )
    return true
  }
}

const mapStateToProps = state => ({
  state: state.navigation
})

export default connect(mapStateToProps)(AppNavigatorWithState)