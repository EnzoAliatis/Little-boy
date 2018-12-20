import React, { Component } from 'react'
import {
  FlatList,
  View,
  Text,
  Button
} from 'react-native'

import { connect } from 'react-redux'



import ScheduleListLayout from '../components/schedule-list-layout';
import ScheduleListItem from '../components/schedule-list-item';

import { getMateriaByDay } from '../../../reducers/infoUser';
import EmptyList from '../../utils/empty-list';


import { defineColor } from '../../utils/defineColorFunction'
import SeparatorList from '../../utils/separator-list';

import { incrementDay } from '../../../actions/index'






class ScheduleList extends Component {

  keyExtractor = item => item.name

  renderItem = ({ item }) => (
    <ScheduleListItem
      hour={item.hours}
      number={item.classroom}
      name={item.name}
      color={defineColor(item.formation)}
    />
  )

  renderEmpty = () => <EmptyList text={'No tienes materias hoy'} />
  renderSeparator = () => <SeparatorList />


  render() {
    console.log(this.props.state)
    console.log(this.props.materias)
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
      // <View>
      //   <Text>Hola</Text>
      //   <Button
      //     onPress={() => this.props.up()}
      //     title='Siii'
      //   />
      // </View>
    )
  }
}


mapStateToProps = state => ({
  materias: getMateriaByDay(state.infoUser.data.subjects, state.diaSemana),
  state: state
})

mapDispatchToProps = dispatch => ({
  up: () => dispatch(incrementDay())
})


export default connect(mapStateToProps, mapDispatchToProps)(ScheduleList)