import React, { Component } from 'react'

import { connect } from 'react-redux'

import { incrementDay, decrementDay } from '../../../actions'
import HeaderWithArrows from '../../utils/components/header-with-arrows';


class ScheduleHeaderContainer extends Component {

  state = {
    days: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
  }

  render() {
    return (
      <HeaderWithArrows
        title={this.state.days[this.props.selected]}
        onPressRight={() => this.props.onPressRight(this.props.selected)}
        onPressLeft={() => this.props.onPressLeft(this.props.selected)}
      />
    )
  }
}


const mapStateToProps = state => ({
  selected: state.diaSemana
})

const mapDispatchToProps = dispatch => ({
  onPressRight: (idx) => dispatch(incrementDay(idx)),
  onPressLeft: (idx) => dispatch(decrementDay(idx))
})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleHeaderContainer)


