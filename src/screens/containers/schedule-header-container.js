import React, { Component } from 'react'
import ScheduleHeader from '../components/schedule-header';


class ScheduleHeaderContainer extends Component {

  state = {
    dias: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
    selected: 0
  }



  onPressRight = (idx) => {
    const arrayLenght = this.state.dias.length
    if (idx === arrayLenght -1) {
      this.setState({selected: 0})
    } else {
      this.setState((prevState) => {
        return {selected: prevState.selected + 1};
      });
    }
  }

  onPressLeft = (idx) => {
    const arrayLenght = this.state.dias.length
    if (idx === 0) {
      this.setState({selected: arrayLenght -1})
    } else {
      this.setState((prevState) => {
        return {selected: prevState.selected - 1};
      });
    }
  }

  render() {
    return(
      <ScheduleHeader
        dia={this.state.dias[this.state.selected]}
        onPressRight={() => this.onPressRight(this.state.selected)}
        onPressLeft={() => this.onPressLeft(this.state.selected)}
      />
    )
  }
}



export default ScheduleHeaderContainer


