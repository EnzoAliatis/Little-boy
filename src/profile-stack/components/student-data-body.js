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
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Número Matrícula:</Text>
        <Text style={styles.infoText}>E2018-590</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Tipo Alumno:</Text>
        <Text style={styles.infoText}>Regular</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Valor Pagado:</Text>
        <Text style={styles.infoText}>$8.00</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Valor Generado:</Text>
        <Text style={styles.infoText}>$0.00</Text>
      </View>
    </View>
  </View>
)


const styles = StyleSheet.create({
  container: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F1F1F1',

  },
  infoTitle: {
    fontSize: 18,
    color: '#151515',
    fontWeight: 'bold',
    marginTop: 15
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    color: '#1D1D1D',
  },
  infoContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#E1E1E1',
    marginBottom: 8,

  }
})



export default StudentDataBody


