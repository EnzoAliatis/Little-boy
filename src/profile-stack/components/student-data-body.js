import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const StudentDataBody = ({ email, phone, level, itinerary, registrationNumber, typeStudent, Vgenerated, Vpaid }) => (
  <View style={styles.container}>
    <View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Email:</Text>
        <Text style={styles.infoText}>{email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Teléfono:</Text>
        <Text style={styles.infoText}>{phone}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Nivel:</Text>
        <Text style={styles.infoText}>{level}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Itinerario:</Text>
        <Text style={styles.infoText}>{itinerary}</Text>
      </View>
    </View>
    <View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Número Matrícula:</Text>
        <Text style={styles.infoText}>{registrationNumber}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Tipo Alumno:</Text>
        <Text style={styles.infoText}>{typeStudent}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Valor Pagado:</Text>
        <Text style={styles.infoText}>${Vpaid}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Valor Generado:</Text>
        <Text style={styles.infoText}>${Vgenerated}</Text>
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


