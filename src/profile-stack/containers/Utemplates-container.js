import React, { Component } from 'react'
import {
  Text,
  FlatList
} from 'react-native'
import UtemplatesLayout from '../components/Utemplates-layout';
import HeaderSearch from '../../utils/components/header-search';
import MaterialListItem from '../../main-stack/components/material-list-item';
import SeparatorList from '../../utils/separator-list';


class UtemplatesContainer extends Component {



  state = {
    plantillas: [
      {
        id: '13',
        title: 'Justificación Faltas',
        uri: ''
      },
      {
        id: '42',
        title: 'Devolución Pago',
        uri: ''
      },
      {
        id: '22',
        title: 'Acoso Estudiantil',
        uri: ''
      },
      {
        id: '11',
        title: 'Tercera Matrícula',
        uri: ''
      },
      {
        id: '93',
        title: 'Examen Atrasado',
        uri: ''
      },
      {
        id: '56',
        title: 'Correccion Asignatura',
        uri: ''
      }
    ],
    searcher: '',
    noData: false
  }

  getInitial = () => (
    plantillas = [
      {
        id: '13',
        title: 'Justificación Faltas',
        uri: ''
      },
      {
        id: '42',
        title: 'Devolución Pago',
        uri: ''
      },
      {
        id: '22',
        title: 'Acoso Estudiantil',
        uri: ''
      },
      {
        id: '11',
        title: 'Tercera Matrícula',
        uri: ''
      },
      {
        id: '93',
        title: 'Examen Atrasado',
        uri: ''
      },
      {
        id: '56',
        title: 'Correccion Asignatura',
        uri: ''
      },
    ]
  )



  onSearchChange = (text) => {
    const texto = text.toLowerCase()
    const plantillas = this.getInitial()
    const filtered = plantillas.filter(item => {
      return item.title.toLowerCase().match(texto)
    })

    if (!texto || texto === '') {
      this.setState((prev) => ({
        plantillas: this.getInitial(),
        searcher: text
      }))
    } else if (!Array.isArray(filtered) && !filtered.length) {
      this.setState(() => ({
        noData: true
      }))
    } else if (Array.isArray(filtered)) {
      this.setState(prev => ({
        plantillas: filtered,
        searcher: text,
        noData: false
      }))
    }

  }

  onItemPress = (uri) => {
    this.props.navigation.navigate('PdfContainer', {
      pdfUrl: item.pdfUrl
    })
  }

  keyExtractor = item => item.id

  renderItem = ({ item }) => (
    <MaterialListItem
      title={item.title}
      colorIcon={'#444444'}
    />
  )

  itemSeparator = () => <SeparatorList color={"#BE5150"} />



  render() {
    return (
      <UtemplatesLayout>
        <HeaderSearch
          placeholder={'Buscar'}
          textValue={this.state.searcher}
          onChangeText={(text) => this.onSearchChange(text)}
        />
        {
          this.state.noData ? <Text>No existe esta conincivencia</Text> :
            <FlatList
              data={this.state.plantillas}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.itemSeparator}
            />
        }
      </UtemplatesLayout>
    )
  }
}


export default UtemplatesContainer