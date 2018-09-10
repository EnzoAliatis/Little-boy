import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import ProfileHeader from './profile-header';

const ProfileMainLayout = ({ children, cedula, nombre, carrera }) => (
  <View style={styles.contianer}>
    <ProfileHeader
      cedula={cedula}
      nombre={nombre}
      carrera={carrera}
    />
    <View style={styles.serviceContainer}>
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: '#575757'
  },
  serviceContainer:{
    flex: 1
  }
})

export default ProfileMainLayout