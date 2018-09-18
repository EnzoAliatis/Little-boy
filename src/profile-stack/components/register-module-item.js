import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'


const RegisterModuleItem = () => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Text style={styles.textParallel}>A</Text>
      <Text style={styles.textTitle}>Horario:</Text>
      <Text style={styles.textInfo}>Martes 9:00-11:00</Text>
      <Text style={styles.textInfo}>Jueves 9:00-11:00</Text>
      <Text style={styles.textTitle}>Profesor:</Text>
      <Text style={styles.textInfo}>Ing. Omero Simpson</Text>
    </View>
    <TouchableOpacity style={styles.bottonContainer}>
      <Icon name={true ? 'check-circle-o' : 'circle-o'} size={35} color={'#3ABEFF'} />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E1E1',
    width: '45%',
    borderRadius: 5
  },
  infoContainer: {
    backgroundColor: '#F7F7F7',
    margin: 5,
    padding: 2,
    borderRadius: 5

  },
  textParallel: {
    color: '#151515',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  },
  textTitle: {
    color: '#151515',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  textInfo: {
    color: '#1D1D1D',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5
  },
  bottonContainer: {
    backgroundColor: '#F7F7F7',
    padding: 2,
    alignItems: 'center'
  }

})



export default RegisterModuleItem