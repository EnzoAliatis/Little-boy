import React, { Component } from 'react'
import {
  View
} from 'react-native'
import { connect } from 'react-redux'
import SubjectList from './subject-list';

class Home extends Component {

  

  componentDidMount() {
    this.props.dispatch({
      type: 'SET_EXAMPLE_NAME',
      payload: {
        name: 'Enzo Aliatis'
      }
    })
  }

  render() {
    return (
      <View>
        <SubjectList />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  name: state.example.exampleName
})

export default connect(mapStateToProps)(Home)