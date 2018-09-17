import React, { Component } from 'react'
import QualificationsLayouts from '../components/qualifications-layout';


class Qualifications extends Component {

  state = {
    titles: ['General', 'Primer Año', 'Segundo Año', 'Tercer Año', 'Cuarto Año', 'Quinto Año'],
    titleSelected: 0
  }

  onPressRight = () => {
    if (this.state.titleSelected > 4) {
      this.setState(() => ({
        titleSelected: 0
      }))
    } else {
      this.setState(preState => ({
        titleSelected: preState.titleSelected + 1
      }))
    }
  }

  onPressLeft = () => {
    if (this.state.titleSelected < 1) {
      this.setState(() => ({
        titleSelected: 5
      }))
    } else {
      this.setState((preState) => ({
        titleSelected: preState.titleSelected - 1
      }))
    }
  }


  render() {
    return (
      <QualificationsLayouts
        headetTitle={this.state.titles[this.state.titleSelected]}
        onPressRight={this.onPressRight}
        onPressLeft={this.onPressLeft}
      />
    )
  }
}

export default Qualifications