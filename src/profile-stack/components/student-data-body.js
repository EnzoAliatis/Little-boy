import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const StudentDataBody = ({ }) => (
  <View style={styles.container}>
    <View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Email:</Text>
        <Text style={styles.infoText}>enzo.aliatis@gmail.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Teléfono:</Text>
        <Text style={styles.infoText}>0980730006</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Nivel:</Text>
        <Text style={styles.infoText}>Sexto</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Itinerario:</Text>
        <Text style={styles.infoText}>Crédito</Text>
      </View>
    </View>
    <View>
      <Text style={styles.infoTitle}>Número Matrícula:</Text>
      <Text style={styles.infoText}>E2018-590</Text>
      <Text style={styles.infoTitle}>Tipo Alumno:</Text>
      <Text style={styles.infoText}>Regular</Text>
      <Text style={styles.infoTitle}>Valor Pagado:</Text>
      <Text style={styles.infoText}>$8.00</Text>
      <Text style={styles.infoTitle}>Valor Generado:</Text>
      <Text style={styles.infoText}>$0.00</Text>
    </View>
  </View>
)


const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F7F7F7',
    margin: 3,
    borderRadius: 5,
    paddingVertical: 10

  },
  infoTitle: {
    fontSize: 20,
    color: '#151515',
    fontWeight: 'bold'
  },
  infoText: {
    fontSize: 16,
    color: '#1D1D1D',
    marginBottom: 8
  },
  infoContainer: {
    borderBottomWidth: 3,
    borderBottomColor: '#444444' 
  }
})



export default StudentDataBody


