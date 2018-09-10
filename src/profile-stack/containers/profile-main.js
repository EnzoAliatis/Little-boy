import React, { Component } from 'react'
import ProfileMainLayout from '../components/profile-main-layout';
import { FlatList } from 'react-native'
import ProfileServiceItem from '../components/profile-service-item';


class ProfileMain extends Component {

  state = {
    services: [
      {
        name: 'Mis Datos',
        route: ''
      },
      {
        name: 'Mis Notas',
        route: ''
      },
      {
        name: 'Registros',
        route: ''
      },
      {
        name: 'Plantillas Universitarias',
        route: ''
      },
      {
        name: 'Sugerencias',
        route: ''
      },
      {
        name: 'Cambiar Contraseña',
        route: ''
      },
      {
        name: 'Cerrar Sesion',
        route: ''
      },

    ]
  }


  keyExtractor = item => item.name

  renderItem = ({ item }) => (
    <ProfileServiceItem
      name={item.name}
    />
  )


  render() {
    return (
      <ProfileMainLayout>
        <FlatList 
          data={this.state.services}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </ProfileMainLayout>
    )
  }
}


export default ProfileMain