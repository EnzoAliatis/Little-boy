import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const EvaluationListLayout = ({ children, average1, average2, colorPanel }) => (
  <View style={styles.container}>
    <View style={[{ backgroundColor: colorPanel }, styles.averagePanel]}>
      <View style={styles.averageDisplay}>
        <Text style={styles.nota}>Nota 1</Text>
        <Text style={styles.average}>{average1}</Text>
      </View>
      <View style={styles.averageDisplay}>
        <Text style={styles.nota}>Nota 2</Text>
        <Text style={styles.average}>{average2}</Text>
      </View>
    </View>

    <View style={styles.table}>
      <View style={styles.tableHeaderContainer}>
        <View style={styles.tableHeaderMateriaContainer}>
          <Text style={styles.tableHeaderText}>Componente</Text>
        </View>
        <View style={styles.tableHeaderTextContainer}>
          <Text style={styles.tableHeaderText}>Mecanismo</Text>
        </View>
        <View style={styles.tableHeaderTextContainer}>
          <Text style={styles.tableHeaderText}>Evaluacion</Text>
        </View>
      </View>
      <View style={styles.tableBoddyContainer}>
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
    marginTop: 3,
    height: 120
  },
  averagePanel: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
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
    borderRadius: 5
  },
  tableHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tableHeaderMateriaContainer: {
    width: '35%',
    backgroundColor: 'red'
  },
  tableHeaderTextContainer: {
    width: '30%',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  tableHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D1D1D'
  }
})

export default EvaluationListLayout