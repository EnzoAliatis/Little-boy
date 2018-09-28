import React, { Component } from 'react'

import SuggestionsLayout from '../components/suggestionsLayout';



class SuggestionsContainer extends Component {

  state = {
    categories: [
      {
        value: 'Sugerencia',
      },
      {
        value: 'Reportar Problema',
      },
      {
        value: 'Reportar error ortográfico',
      }
    ],
    selected: ''
  }


  render() {
    return (
      <SuggestionsLayout
        categories={this.state.categories}
      />
    )
  }
}


export default SuggestionsContainer