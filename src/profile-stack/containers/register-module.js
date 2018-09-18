import React, { Component } from 'react'
import { FlatList } from 'react-native'


import RegisterModuleLayout from '../components/register-module-layout';
import RegisterModuleItem from '../components/register-module-item';


class RegisterModule extends Component {

  state = {
    availableSubjects: [
      {
        id: '1',
        name: 'Gestion de Calidad de Software',
        avaliables:
          [
            { parallel: 'A', schedule: ['Martes 9:00-11:00', 'Jueves: 9:00-11:00'], teacher: 'Ing.Ronaldo Nazrio' },
            { parallel: 'B', schedule: ['Miercoles 9:00-11:00', 'Viernes: 9:00-11:00'], teacher: 'Ing.Ronaldo Nazrio' },
            { parallel: 'C', schedule: ['Lunes 9:00-11:00', 'Jueves: 11:00-12:00'], teacher: 'Mg.Leonel Messi' },
          ]
      },
      {
        id: '2',
        name: 'Bases de Datos Distribuidas',
        avaliables:
          [
            { parallel: 'A', schedule: ['Martes 16:00-18:00', 'Jueves: 16:00-18:00'], teacher: 'Ing.Eden Hazzard' },
            { parallel: 'B', schedule: ['Lunes 16:00-18:00', 'Miercoles: 16:00-18:00'], teacher: 'Ing.Eden Hazzard' }
          ]
      }
    ],
    selected: 0
  }

  keyExtractor = (item, idx) => idx.toString()

  renderItem = ({ item }) => (
    <RegisterModuleItem
      parallel={item.parallel}
      schedule={item.schedule}
      teacher={item.teacher}
    />
  )




  render() {
    return (
      <RegisterModuleLayout
       headerTitle={this.state.availableSubjects[0].name}
      >
        <FlatList
          data={this.state.availableSubjects[0].avaliables}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />

        {console.log(this.state.availableSubjects[0].name)}
      </RegisterModuleLayout>
    )
  }
}




export default RegisterModule
