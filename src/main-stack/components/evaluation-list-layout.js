import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const EvaluationListLayout = ({ children, average1, average2, colorPanel }) => (
  <View style={styles.container}>
    <View style={[{ backgroundColor: colorPanel }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={styles.averageDisplay}>
          <Text style={styles.nota}>Nota 1</Text>
          <Text style={styles.average}>{average1}</Text>
        </View>
        <View style={styles.averageDisplay}>
          <Text style={styles.nota}>Nota 2</Text>
          <Text style={styles.average}>{average2}</Text>
        </View>
      </View>
    </View>

    <View style={styles.table}>
      <View style={styles.tableHeaderContainer}>
        <View style={styles.tableHeaderComponenteContainer}>
          <Text style={styles.tableHeaderText}>Componente</Text>
        </View>
        <View style={styles.tableHeaderMecanismoContainer}>
          <Text style={styles.tableHeaderText}>Mecanismo</Text>
        </View>
        <View style={styles.tableHeaderNotaContainer}>
          <Text style={styles.tableHeaderText}>Nota</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  averageDisplay: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  totalAverage: {
    alignSelf: 'center',
    marginBottom: 10
  },
  totalAverageText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  nota: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  average: {
    fontSize: 50,
    color: 'white'
  },
  childrens: {
    flex: 1
  },
  table: {
    backgroundColor: '#F7F7F7',
    padding: 5,
    margin: 2,
    borderRadius: 5,
    flex: 1
  },
  tableHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tableHeaderComponenteContainer: {
    width: '50%'
  },
  tableHeaderMecanismoContainer: {
    alignItems: 'center'
  },
  tableHeaderNotaContainer: {
    alignItems: 'center'
  },
  tableHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D1D1D'
  }
})

export default EvaluationListLayout