import React, { Component } from 'react'
import {
  View
} from 'react-native'
import { connect } from 'react-redux'
import SubjectList from './subject-list';

class Home extends Component {
  render() {
    return (
      <View>
        <SubjectList />
      </View>
    )
  }
}


export default connect()(Home)