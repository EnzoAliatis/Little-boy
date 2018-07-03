import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

class AppLayout extends Component {

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
        <Text>Aqui es el Home de tu App...</Text>
        <Text>Provando tu reducer {this.props.userExample || 'Indefinido'}</Text>
      </View>
    )
  }
}


const mapStateToProps = state => ({
  userExample: state.example.exampleName
})

export default connect(mapStateToProps)(AppLayout)