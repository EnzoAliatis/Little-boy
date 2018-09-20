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
        level: '6to',
        credits: 4,
        avaliables:
          [
            { parallel: 'A', schedule: ['Martes 9:00-11:00', 'Jueves: 9:00-11:00'], teacher: 'Ing.Ronaldo Nazrio', selected: false },
            { parallel: 'B', schedule: ['Miercoles 9:00-11:00', 'Viernes: 9:00-11:00'], teacher: 'Ing.Ronaldo Nazrio', selected: false },
            { parallel: 'C', schedule: ['Lunes 9:00-11:00', 'Jueves: 11:00-12:00'], teacher: 'Mg.Leonel Messi', selected: false },
          ]
      },
      {
        id: '2',
        name: 'Bases de Datos Distribuidas',
        level: '6to',
        credits: 4,
        avaliables:
          [
            { parallel: 'A', schedule: ['Martes 16:00-18:00', 'Jueves: 16:00-18:00'], teacher: 'Ing.Eden Hazzard', selected: false },
            { parallel: 'B', schedule: ['Lunes 16:00-18:00', 'Miercoles: 16:00-18:00'], teacher: 'Ing.Eden Hazzard', selected: false }
          ]
      },
      {
        id: '3',
        name: 'Aplicación de Herramientas Case',
        level: '7to',
        credits: 4,
        avaliables:
          [
            { parallel: 'A', schedule: ['Martes 16:00-18:00', 'Jueves: 16:00-18:00'], teacher: 'Ing.Eden Hazzard', selected: false },
            { parallel: 'B', schedule: ['Lunes 16:00-18:00', 'Miercoles: 16:00-18:00'], teacher: 'Ing.Eden Hazzard', selected: false }
          ]
      },
      {
        id: '4',
        name: 'Optativa I',
        level: '7to',
        credits: 10,
        avaliables:
          [
            { parallel: 'A', schedule: ['Martes 9:00-11:00', 'Jueves: 9:00-11:00'], teacher: 'Ing.Ronaldo Nazrio', selected: false },
            { parallel: 'B', schedule: ['Miercoles 9:00-11:00', 'Viernes: 9:00-11:00'], teacher: 'Ing.Ronaldo Nazrio', selected: false },
            { parallel: 'C', schedule: ['Lunes 9:00-11:00', 'Jueves: 11:00-12:00'], teacher: 'Mg.Leonel Messi', selected: false },
          ]
      }
    ],
    step: 0,
    stepEnd: false,
    selectedSubjects: []
  }

  keyExtractor = (item, idx) => idx.toString()

  renderItem = ({ item }) => (
    <RegisterModuleItem
      parallel={item.parallel}
      schedule={item.schedule}
      teacher={item.teacher}
      selected={item.selected}
      onPressItem={() => this.onPressItem(item.parallel)}
    />
  )

  onPressRight = () => {
    if (this.state.step < this.state.availableSubjects.length - 1) {
      this.setState(prev => ({
        step: prev.step + 1
      }))
    } else {
      this.setState(prev => ({
        stepEnd: true
      }))
    }

  }

  onPressLeft = () => {
    if (this.state.step !== 0) {
      this.setState(prev => ({
        step: prev.step - 1,
        stepEnd: false
      }))
    } 
  }

  onPressItem = (parallel) => {
    const item = Object.assign([], this.state.availableSubjects)

    item[this.state.step].avaliables.map(item => item.selected = false)
    item[this.state.step].avaliables.filter(item => item.parallel === parallel)[0].selected = !item[this.state.step].avaliables.filter(item => item.parallel === parallel)[0].selected

    this.setState(() => ({
      availableSubjects: item
    }))

    this.onPressRight()
  }

 


  render() {
    return (
      <RegisterModuleLayout
        headerTitle={this.state.stepEnd ? 'General' : `${this.state.step + 1} de ${this.state.availableSubjects.length} Materias`}
        subjectName={this.state.availableSubjects[this.state.step].name}
        subjectLevel={this.state.availableSubjects[this.state.step].level}
        subjectCredits={this.state.availableSubjects[this.state.step].credits}
        avaliableParallel={this.state.availableSubjects[this.state.step].avaliables.length}
        onPressRight={this.onPressRight}
        onPressLeft={this.onPressLeft}
        stepEnd={this.state.stepEnd}
      >
        <FlatList
          data={this.state.availableSubjects[this.state.step].avaliables}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </RegisterModuleLayout>
    )
  }
}




export default RegisterModule
