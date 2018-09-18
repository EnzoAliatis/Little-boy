import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const RegisterInfoPanel = ({ title, texto }) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Información sobre la matrícula</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.texto}>{'\u2022'} Su porcentaje total de todos los créditos u horas reprobado(a)s: 0.00% * (Si este porcentaje supera el 30%, significa que usted ha perdido de forma definitiva la gratuidad).</Text>
      <Text style={styles.texto}>{'\u2022'} Su número de asignaturas reprobadas pendientes de aprobación: 0</Text>
      <Text style={styles.texto}>{'\u2022'} Observación: Para ser considerado estudiante regular, usted debe registrarse en mínimo 4 asignaturas que representan el 60% mínimo en las que debe matricularse para el período académico. O, si usted se encuentra en su úlitmo périodo académico, en todas las asignaturas pendientes para concluir su carrera.</Text>
      <Text style={styles.texto}>{'\u2022'} Valor preliminar de matrícula: $0.00</Text>
      <Text style={styles.texto}>{'\u2022'} Antes de empezar el proceso de matriculación, haber leído antes las materias abiertas</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E1E1'
  },
  titleContainer: {
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 5,
    paddingTop: 5,
    margin: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E1E1E1'
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  infoContainer: {
    backgroundColor: '#F7F7F7',
    padding: 5,
    margin: 2,
  },
  texto: {
    textAlign: 'justify',
    fontSize: 16,
    marginBottom: 5
  }
})


export default RegisterInfoPanel