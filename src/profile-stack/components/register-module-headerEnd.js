import React from 'react'
import {
  View,
  Text,
  StyleSheet

} from 'react-native'


const RegisterModuleHederEnd = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Importante:</Text>
    <Text style={styles.texto}>Ud esta apunto de terminar el proceso de matriculacion. Verifique haber seleccionado las materias con sus respectivos paralelos de forma conveniente.</Text>
    <Text style={styles.texto}>Una vez seguro, revise por ultima vez las materias seleccionada y presione "Finalizar Matricula" localizado al final de sus materias escogidas</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    borderWidth: 3,
    borderColor: '#E1E1E1'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  texto: {
    textAlign: 'justify'
  }
})

export default RegisterModuleHederEnd