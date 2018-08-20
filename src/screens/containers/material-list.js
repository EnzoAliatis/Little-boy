import React, { Component } from 'react'
import {
  SectionList
} from 'react-native'


import EmptyList from '../../utils/empty-list'
import MaterialListLayout from '../components/material-list-layout';
import MaterialListHeader from '../components/material-list-header';
import MaterialListItem from '../components/material-list-item'
import SeparatorList from '../../utils/separator-list'


class MaterialList extends Component {

  state = {
    data: [
      { title: 'Semana 1', data: [{ title: 'Bienvenidos', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Silabo', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Directivas', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'El Software', uri: 'pdfUri', initDate: '01/03/2018' }] },
      { title: 'Semana 2', data: [{ title: 'Agile Manifest', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Agile Grils', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Modelo en Cascada', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Explicando Scrum', uri: 'pdfUri', initDate: '01/03/2018' }] },
      { title: 'Semana 3', data: [{ title: 'Tutotias', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Agile Grils y RRHH', uri: 'pdfUri', initDate: '01/03/2018' }] },
      { title: 'Semana 4', data: []},
      { title: 'Semana 5', data: [{ title: 'Getion de Costos', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Ejercicios Costos', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'No silver bullet', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Un Buen Scrum', uri: 'pdfUri', initDate: '01/03/2018' }] },
      { title: 'Semana 6', data: [{ title: 'Planing Poker', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Guia de Sprintomer', uri: 'pdfUri', initDate: '01/03/2018' },  { title: 'Descargar Sprintomer', uri: 'pdfUri', initDate: '01/03/2018' },  { title: 'Actividad en Clase', uri: 'pdfUri', initDate: '01/03/2018' } ] },
      { title: 'Semana 7', data: [{ title: 'Usability Heuristic', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Usabilidad', uri: 'pdfUri', initDate: '01/03/2018' },  { title: 'Evaluacion 10 H Nilsen', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Avtividad Tarea', uri: 'pdfUri', initDate: '01/03/2018' }] },
      { title: 'Semana 8', data: [{ title: 'Accesibilidad Web', uri: 'pdfUri', initDate: '01/03/2018' }]},
      { title: 'Semana 9', data: [{ title: 'Accesibilidad desde Twitter', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Libro: Una web para Todos', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Auditorias', uri: 'pdfUri', initDate: '01/03/2018' }] },
      { title: 'Semana 10', data: [{ title: 'Agile Manifest', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Agile Grils', uri: 'pdfUri', initDate: '01/03/2018' }] },
      { title: 'Semana 11', data: [{ title: 'SDL', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'SDL Spanish', uri: 'pdfUri', initDate: '01/03/2018' }] },
      { title: 'Semana 12', data: []},
      { title: 'Semana 13', data: [{ title: 'Un Titulo bien largo', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Otro titulo largo para Probar', uri: 'pdfUri', initDate: '01/03/2018' }] },
      { title: 'Semana 14', data: [{ title: 'Exposisciones Grupos', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Tema Exposiciones', uri: 'pdfUri', initDate: '01/03/2018' }] },
      { title: 'Semana 15', data: [{ title: 'Tema Parciales', uri: 'pdfUri', initDate: '01/03/2018' }, { title: 'Parciales Practicas', uri: 'pdfUri', initDate: '01/03/2018' }] },
      { title: 'Semana 16', data: []}
    ]
  }

  static navigationOptions = () => ({
    title: 'Materiales'
  })

  goToMaterial = item => {
    this.props.navigation.navigate('PdfContainer', {
      pdfUrl: '../../../assets/pdf/pdfPrueba.pdf'
    })
  }

  keyExtractor = (item, index) => (item + index).toString()
  itemSeparator= () => <SeparatorList />
  renderEmpty = () => <EmptyList text="No hay materiales disponibles" />
  renderSectionHeader = ({ section: { title } }) => <MaterialListHeader title={title} />
  renderItem = ({ item }) => (
    <MaterialListItem 
      onPress={this.goToMaterial}
      title={item.title}
      initDate={item.initDate}
    />
  )
  render() {
    return (
      <MaterialListLayout>
        <SectionList
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
          sections={this.state.data}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          ItemSeparatorComponent={this.itemSeparator}
        />
      </MaterialListLayout>
    )
  }
}


export default MaterialList