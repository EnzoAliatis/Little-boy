import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { PieChart } from 'react-native-svg-charts'



const data = [
  {
    key: 3,
    amount: 7,
    svg: { fill: '#3ABEFF' },
    name: 'Actual'
  },
  {
    key: 2,
    amount: 32,
    svg: { fill: '#F9644D' },
    name: 'No tomadas'
  },
  {
    key: 1,
    amount: 33,
    svg: { fill: '#38E86F' },
    name: 'Aprovadas'
  },
]

const QualificationsChartPensum = () => (
  <View>
    <PieChart
      style={{ height: 200 }}
      valueAccessor={({ item }) => item.amount}
      data={data}
      spacing={0}
      outerRadius={'95%'}
    />
    <View style={styles.legendContainer}>
      <View style={{ backgroundColor: '#38E86F', height: 20, width: 20 }}></View>
      <Text style={styles.textLegend}>Aprobadas: 33</Text>
      <View style={{ backgroundColor: '#3ABEFF', height: 20, width: 20 }}></View>
      <Text style={styles.textLegend}>Actual: 7</Text>
      <View style={{ backgroundColor: '#F9644D', height: 20, width: 20 }}></View>
      <Text style={styles.textLegend}>No Tomadas: 32</Text>

    </View>
  </View>
)

const styles = StyleSheet.create({
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 7,
    marginTop: 10,
    marginBottom: 15
  },
  textLegend: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default QualificationsChartPensum