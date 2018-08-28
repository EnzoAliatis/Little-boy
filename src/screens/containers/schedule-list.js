import React, { Component } from 'react'
import {
  FlatList
} from 'react-native'
import ScheduleListLayout from '../components/schedule-list-layout';
import ScheduleListItem from '../components/schedule-list-item';
import ScheduleHeader from '../components/schedule-header';





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
      hour={item.hora}
      name={item.name}
      number={item.salon}
      color={item.color}
    />
  )


  render() {
    return (
      <ScheduleListLayout>
        <FlatList
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          data={this.state.info}
        />
      </ScheduleListLayout>
    )
  }
}



export default ScheduleList