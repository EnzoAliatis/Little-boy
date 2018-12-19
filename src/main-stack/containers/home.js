import React, { Component } from 'react'

import { connect } from 'react-redux'
import SubjectList from './subject-list'

class Home extends Component {
  render () {
    return (
      <SubjectList />
    )
  }
}

export default connect()(Home)
