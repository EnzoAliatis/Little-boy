import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const EvaluationListLayout = ({ children, average1, average2 }) => (
  <View style={styles.container}>
    <View style={styles.averagePanel}>
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
      <View style={styles.tableHeader}>
        <View style={styles.tableHeaderNumber}>
          <Text style={styles.itemText}>P</Text>
        </View>
        <View style={styles.tableHeaderComponente}>
          <Text style={styles.itemText}>Componente</Text>
        </View>
        <View style={styles.tableHeaderMecanismo}>
          <Text style={styles.itemText}>Mecanismo</Text>
        </View>
        <View style={styles.tableHeaderEvaluacion}>
          <Text style={styles.itemText}>N</Text>
        </View>
      </View>
      <View style={styles.childrens}>
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
    marginHorizontal: 30,
    marginVertical: 20
  },
  averagePanel: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
    borderRadius: 2,
    backgroundColor: 'white'
  },
  nota: {
    fontSize: 20
  },
  average: {
    fontSize: 50,
    color: 'rgb(67,165,70)'
  },
  table: {
    flex: 1,
    margin: 10
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginBottom: 2
  },
  tableHeaderNumber: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tableHeaderComponente: {
    width: 200,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  tableHeaderMecanismo: {
    width: 100,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  tableHeaderEvaluacion: {
    width: 30,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  itemText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  childrens: {
    flex: 1,
    backgroundColor: 'white',
  }
})

export default EvaluationListLayout