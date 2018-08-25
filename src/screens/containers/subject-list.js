import React, { Component } from 'react'
import {
  FlatList,
} from 'react-native'

import SubjectListLayout from '../components/subject-list-layout'
import Empty from '../../utils/empty-list'
import PillComponent from '../components/pill-component'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class SubjectList extends Component {



  goToSubject = item => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'SubjectDescription',
        params: {
          idMateria: item.id,
          title: item.name
        }
      })
    )
  }
  keyExtractor = item => item.id.toString()
  renderEmpty = () => <Empty text="Cargando las materias..." />
  renderItem = ({ item }) => (
    <PillComponent
      pillName={item.name}
      onPress={() => this.goToSubject(item)}
    />
  )


  render() {
    return (
      <SubjectListLayout>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.materias}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
        >
        </FlatList>
      </SubjectListLayout>
    )
  }
}

mapStateToProps = state => ({
  materias: state.materias
})

export default connect(mapStateToProps)(SubjectList)
