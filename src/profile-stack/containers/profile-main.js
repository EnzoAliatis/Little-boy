import React, { Component } from 'react'
import ProfileMainLayout from '../components/profile-main-layout';
import { SectionList } from 'react-native'
import { connect } from 'react-redux'



import ProfileServiceItem from '../components/profile-service-item';
import ProfileSectionServiceHeader from '../components/profile-section-service-header';


class ProfileMain extends Component {

  state = {
    services: [
      {
        title: 'Información Estudiante',
        data: [{ name: 'Mis Datos', route: '' }, { name: 'Mis Notas', route: '' }, { name: 'Hoja de Vida', route: '' }]
      },
      {
        title: 'Materias',
        data: [{ name: 'Materias Abiertas', route: '' }, { name: 'Registro', route: '' }]
      },
      {
        title: 'Informatívos',
        data: [{ name: 'Plantillas Universitaria', route: '' }, { name: 'Cronograma Academico', route: '' }]
      },
      {
        title: 'Soporte',
        data: [{ name: 'Sugerencias', route: '' }, { name: 'Reportar Problema', route: '' }, { name: 'Contacto', route: '' }]
      },
      {
        title: 'Cuenta',
        data: [{ name: 'Cambiar Contraseña', route: '' }, { name: 'Cerrar Sesión', route: '' }]
      }
    ]
  }


  keyExtractor = item => item.name

  renderSectionHeader = ({ section: { title } }) => <ProfileSectionServiceHeader title={title} />

  renderItem = ({ item }) => (
    <ProfileServiceItem
      name={item.name}
    />
  )


  render() {
    return (
      <ProfileMainLayout
        cedula={this.props.infoStudent.cedula}
        nombre={this.props.infoStudent.fullName}
        carrera={this.props.infoStudent.career}
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
  infoStudent: state.infoStudent
})


export default connect(mapStateToProps)(ProfileMain)