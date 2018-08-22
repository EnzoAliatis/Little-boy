import React, { Component } from 'react'

import { FlatList } from 'react-native'
import AdsListLayout from '../components/ads-list-layout';

import EmptyList from '../../utils/empty-list';
import AdsListItem from '../components/ads-list-item';







class AdsList extends Component {

  state = {
    ads: [
      {
        id: '123',
        title: 'Notas subidas',
        body: 'Las notas ya estan subidas al aula virtual por favor verificar sus notas',
        date: '10/10/2018',
        importance: 'normal',
        date: '23/12/2018'
      },
      {
        id: '456',
        title: 'Suspencion Clases',
        body: 'Las clases del dia de mañana se suspenden por el motivo de que voy a faltar, informo con el fin de que hagan la tarea que se ha sibido al aulavirtual',
        date: '10/10/2018',
        importance: 'importante',
        date: '23/12/2018'
      },
      {
        id: '789',
        title: 'Examen!',
        body: 'Les notifico a los estudiantes que el dia 4 de diciembre se tomara el examen de la pagina 10 a la 15, por favor vengan preparados',
        date: '10/10/2018',
        importance: 'muy importante',
        date: '23/12/2018'
      }, {
        id: '123456',
        title: 'Un Aviso normal',
        body: 'Les informo a los estudiante que obtuvieron la mayor nota en el examen, que el día de mañana tendran 2 puntos extras al promedio',
        date: '10/10/2018',
        importance: 'normal',
        date: '23/12/2018'
      },
      {
        id: '456789',
        title: 'Aviso Importante',
        body: 'Este aviso es importante, a los alumnos que no rindieron la evaluacion de la materia, por favor los espero mañana 5pm en mi cubiculo',
        date: '10/10/2018',
        importance: 'importante',
        date: '23/12/2018'
      },
      {
        id: '789987',
        title: 'Aviso Muy Importante',
        body: 'Este Anuncio es muy importante les recuerdo a los estudiantes que se quedaron en recupracion, que la recuperacion será todo lo que vimos este y el parcial anterior, les recuerdo que el examen esta muy dificil asi que vengan preparados, tambien adjunto que algunos estudiantes que no vinieron la clase pasada no tendran nota de participacion',
        date: '10/10/2018',
        importance: 'muy importante',
        date: '23/12/2018'
      },
    ]
  }

  defineColor = importance => {
    if (importance === 'normal') {
      return '#38E86F'
    } else if (importance === 'importante') {
      return '#F6D817'
    } else {
      return '#F9644D'
    }
  }
  keyExtractor = item => item.id
  renderEmpty = () => <EmptyList text="No hay Evaluaciones a mostrar" />
  renderItem = ({ item }) => (
    <AdsListItem
      title={item.title}
      body={item.body}
      color={this.defineColor(item.importance)}
      date={item.date}
    />
  )

  render() {
    return (
      <AdsListLayout>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.ads}
          ListEmptyComponent={this.renderEmpty}
          renderItem={this.renderItem}
        />
      </AdsListLayout>
    )
  }
}


export default AdsList