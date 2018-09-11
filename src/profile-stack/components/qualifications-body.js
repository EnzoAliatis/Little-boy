import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import QualificationsChartCredits from './qualifications-chart-credits';



const QualificationsBody = () => (
  <View>
    <View style={styles.chartContainer}>
      <Text style={styles.titleText}>Créditos Aprobados</Text>
      <QualificationsChartCredits />
    </View>
  </View>
)

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 5
  },
  chartContainer: {

  }
})


export default QualificationsBody