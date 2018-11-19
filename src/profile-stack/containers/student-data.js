import React, { Component } from 'react'
import { connect } from 'react-redux'

import StudentDataLayout from '../components/student-data-layout'

class StudenData extends Component {
  render () {
    return (
      <StudentDataLayout
        infoStudent={this.props.infoStudent}
      />
    )
  }
}

const mapStateToProps = state => ({
  infoStudent: state.infoUser.data.studentById
})

export default connect(mapStateToProps)(StudenData)
