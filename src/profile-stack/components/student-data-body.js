import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const StudentDataBody = ({ }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.infoTitle}>Email:</Text>
      <Text style={styles.infoText}>enzo.aliatis@gmail.com</Text>
      <Text style={styles.infoTitle}>Teléfono:</Text>
      <Text style={styles.infoText}>0980730006</Text>
      <Text style={styles.infoTitle}>Nivel:</Text>
      <Text style={styles.infoText}>Sexto</Text>
      <Text style={styles.infoTitle}>Itinerario:</Text>
      <Text style={styles.infoText}>Crédito</Text>
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
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8

  }
})



export default StudentDataBody


