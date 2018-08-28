import React, { Component } from 'react'

import { connect } from 'react-redux'


import ScheduleHeader from '../components/schedule-header';

import { incrementDay } from '../../../actions'


class ScheduleHeaderContainer extends Component {

  state = {
    days: ['Lun','Mier','juev']
  }



  // onPressRight = (idx) => {
  //   const arrayLenght = this.state.dias.length
  //   if (idx === arrayLenght -1) {
  //     this.setState({selected: 0})
  //   } else {
  //     this.setState((prevState) => {
  //       return {selected: prevState.selected + 1};
  //     });
  //   }
  // }

  // onPressLeft = (idx) => {
  //   const arrayLenght = this.state.dias.length
  //   if (idx === 0) {
  //     this.setState({selected: arrayLenght -1})
  //   } else {
  //     this.setState((prevState) => {
  //       return {selected: prevState.selected - 1};
  //     });
  //   }
  // }

  render() {
    return (
      <ScheduleHeader
        dia={this.state.days[this.props.selected]}
        onPressRight={this.props.onPressRight}
        onPressLeft={() => console.log(this.props.selected)}
      />
    )
  }
}


const mapStateToProps = state => ({
  selected: state.horario
})

const mapDispatchToProps = dispatch => ({
  onPressRight: () => dispatch(incrementDay())
})

export default connect(mapStateToProps,mapDispatchToProps)(ScheduleHeaderContainer)


