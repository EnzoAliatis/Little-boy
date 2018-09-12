import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'
import QualificationsChartCredits from './qualifications-chart-credits';
import QualificationsChartApproved from './qualifications-chart-approved';
import QualificationsChartPensum from './qualifications-chart-pensum';



const QualificationsBody = () => (
  <View >
    <View style={styles.chartContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Materias del Pensum</Text>
      </View>
      <QualificationsChartPensum />
    </View>
    <View style={styles.chartContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Materias Aprobadas</Text>
      </View>
      <QualificationsChartApproved />
    </View>
    <View style={styles.chartContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Créditos Aprobados</Text>
      </View>
      <QualificationsChartCredits />
    </View>
  </View>
)

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 10
  },
  textContainer: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  chartContainer: {
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#B0B0B0',
    borderRadius: 10,

  }
})


export default QualificationsBody