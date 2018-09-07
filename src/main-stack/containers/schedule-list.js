import React, { Component } from 'react'
import {
  FlatList
} from 'react-native'

import { connect } from 'react-redux'



import ScheduleListLayout from '../components/schedule-list-layout';
import ScheduleListItem from '../components/schedule-list-item';
import ScheduleHeader from '../components/schedule-header';
import { getMateriaByDay } from '../../../reducers/materias';
import EmptyList from '../../utils/empty-list';


import { defineColor } from '../../utils/defineColorFunction'
import SeparatorList from '../../utils/separator-list';






class ScheduleList extends Component {

  keyExtractor = item => item.name

  renderHeader = () => <ScheduleHeader />

  renderItem = ({ item }) => (
    <ScheduleListItem
      hour={item.hour}
      number={item.classroom}
      name={item.name}
      color={defineColor(item.formation)}
    />
  )

  renderEmpty = () => <EmptyList text={'No tienes materias hoy'} />
  renderSeparator = () => <SeparatorList />


  render() {
    return (
      <ScheduleListLayout>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.materias}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
        >
        </FlatList>
      </ScheduleListLayout>
    )
  }
}


mapStateToProps = state => ({
  materias: getMateriaByDay(state.materias, state.diaSemana)
})


export default connect(mapStateToProps)(ScheduleList)