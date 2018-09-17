import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import QualificationsLayouts from '../components/qualifications-layout';
import QualificationsBody from '../components/qualifications-body';
import QualificationsTable from '../components/qualifications-table';
import QualificationTableItem from '../components/qualification-table-item';
import SeparatorList from '../../utils/separator-list';


class Qualifications extends Component {

  state = {
    titles: ['General', 'Primer Año', 'Segundo Año', 'Tercer Año', 'Cuarto Año', 'Quinto Año'],
    titleSelected: 0,
    scores: [
      [
        { title: 'Cultura Física', par1: '9.50', par2: '9.00', rec: '', final: '18.50' },
        { title: 'Algebra Lineal', par1: '8.50', par2: '7.00', rec: '', final: '15.50' },
        { title: 'Calcula Diferencial', par1: '9.50', par2: '9.00', rec: '', final: '18.50' },
        { title: 'Física I', par1: '7.60', par2: '6.82', rec: '', final: '14.42' },
        { title: 'Fundamentos de Programacion', par1: '9.50', par2: '9.00', rec: '', final: '18.50' },
        { title: 'Introduccion a la Informática', par1: '9.50', par2: '9.50', rec: '', final: '19.00' },
      ],
      [
        { title: 'Calculo Integral', par1: '9.50', par2: '9.00', rec: '', final: '18.50' },
        { title: 'Física II', par1: '8.50', par2: '7.00', rec: '', final: '15.50' },
        { title: 'Matemáticas Discretas', par1: '9.50', par2: '9.00', rec: '', final: '18.50' },
        { title: 'Programacion Orientada a Objetos', par1: '7.60', par2: '6.82', rec: '', final: '14.42' },
        { title: 'Sistemas Operativos', par1: '9.50', par2: '9.00', rec: '', final: '18.50' },
        { title: 'Tecnicas de Expresión Oral y Escrita', par1: '9.50', par2: '9.50', rec: '', final: '19.00' },
        { title: 'Teoría de Sistemas', par1: '9.50', par2: '9.50', rec: '', final: '19.00' },
      ]
    ],
  }

  onPressRight = () => {
    if (this.state.titleSelected > 4) {
      this.setState(() => ({
        titleSelected: 0
      }))
    } else {
      this.setState(preState => ({
        titleSelected: preState.titleSelected + 1
      }))
    }
  }

  onPressLeft = () => {
    if (this.state.titleSelected < 1) {
      this.setState(() => ({
        titleSelected: 5
      }))
    } else {
      this.setState((preState) => ({
        titleSelected: preState.titleSelected - 1
      }))
    }
  }


  keyExtractor = (item, index) => (item.title + index).toString()
  renderItem = ({ item }) => (
    <QualificationTableItem
      materia={item.title}
      par1={item.par1}
      par2={item.par2}
      rec={item.rec}
      final={item.final}
    />
  )

  renderSeparator = () => <SeparatorList />


  render() {
    return (
      <QualificationsLayouts
        headetTitle={this.state.titles[this.state.titleSelected]}
        onPressRight={this.onPressRight}
        onPressLeft={this.onPressLeft}
      >
        {this.state.titleSelected === 0 && <QualificationsBody />}
        {
          this.state.titleSelected !== 0 &&

          <View>
            <QualificationsTable
              level={(this.state.titleSelected * 2) - 1}
            >
              <FlatList
                data={this.state.scores[(this.state.titleSelected * 2) - 2]}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.renderSeparator}
              />
            </QualificationsTable>

            <QualificationsTable
              level={this.state.titleSelected * 2}
            >
              <FlatList
                data={this.state.scores[(this.state.titleSelected * 2) - 1]}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.renderSeparator}
              />
            </QualificationsTable>
          </View>

        }
      </QualificationsLayouts>
    )
  }
}

export default Qualifications