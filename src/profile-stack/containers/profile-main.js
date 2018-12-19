import React, { Component } from 'react'
import ProfileMainLayout from '../components/profile-main-layout';
import { SectionList } from 'react-native'
import { connect } from 'react-redux'
import { Alert } from 'react-native'

import ProfileServiceItem from '../components/profile-service-item';
import ProfileSectionServiceHeader from '../components/profile-section-service-header';
import { logOut } from '../../../actions/index'


class ProfileMain extends Component {

  state = {
    services: [
      {
        title: 'Información Estudiante',
        data: [{ name: 'Mis Datos', route: 'StudenData' }, { name: 'Mis Notas', route: 'Qualifications' }]
      },
      {
        title: 'Materias',
        data: [{ name: 'Materias Abiertas', route: '' }, { name: 'Registro', route: 'Register' }]
      },
      {
        title: 'Informatívos',
        data: [{ name: 'Plantillas Universitaria', route: 'Utemplates' }, { name: 'Cronograma Academico', route: '' }]
      },
      {
        title: 'Soporte',
        data: [{ name: 'Sugerencias', route: 'Suggestions' }, { name: 'Contactos', route: 'Contacts' }]
      },
      {
        title: 'Cuenta',
        data: [{ name: 'Cambiar Contraseña', route: '' }, { name: 'Cerrar Sesión', route: 'Logout' }]
      }
    ]
  }

  handleLogout = async () => {
    await this.props.logout()
    this.props.navigation.navigate('Login')
    // En el componenete Loading es que se hacen todas las validaciones de logeo
  }

  goToOption = route => {
    if (route === 'Logout') {
      Alert.alert(
        '¿Cerrar sesión?',
        '¿Está seguro que desea cerrar sesión?',
        [
          { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'Cerrar Sesión', onPress: this.handleLogout },
        ]
      )
    }
    this.props.navigation.navigate(`${route}`)
  }

  keyExtractor = item => item.name

  renderSectionHeader = ({ section: { title } }) => <ProfileSectionServiceHeader title={title} />

  renderItem = ({ item }) => (
    <ProfileServiceItem
      name={item.name}
      onPress={() => this.goToOption(item.route)}
    />
  )


  render() {
    return (
      <ProfileMainLayout
        nombre={this.props.fullName}
        carrera={this.props.career}
      >
        <SectionList
          sections={this.state.services}
          keyExtractor={this.keyExtractor}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderItem}
        />
      </ProfileMainLayout>
    )
  }
}

const mapStateToProps = state => ({
  fullName: state.infoUser.data.fullName,
  career: state.infoUser.data.career,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMain)