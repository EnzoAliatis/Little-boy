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






class ScheduleList extends Component {

  state = {
    info: [
      {
        name: 'Matematicas',
        hora: ['9:00', '11:00'],
        salon: '301',
        color: '#E8D246'
      },
      {
        name: 'Bases de datos Distribuidas',
        hora: ['11:00', '13:00'],
        salon: '303',
        color: '#9CBA5F'
      },
      {
        name: 'Quimica',
        hora: ['15:00', '17:00'],
        salon: '302',
        color: '#BE5150'
      }
    ]
  }




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

  renderEmpty = () => <EmptyList text={'No tienes materias'} />


  render() {
    console.log(this.props.materias)

    return (

      <ScheduleListLayout>
        {console.log(this.props.materias)}
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.materias}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
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