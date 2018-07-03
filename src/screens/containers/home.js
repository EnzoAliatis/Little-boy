import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

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
        <Text>Estas en la Home {this.props.name}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  name: state.example.exampleName
})

export default connect(mapStateToProps)(Home)