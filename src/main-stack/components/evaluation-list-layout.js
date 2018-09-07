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
      <View style={styles.tableHeader}>
        <View style={styles.tableHeaderParcial}>
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
    marginTop: 3,
    height: 120
  },
  averagePanel: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  nota: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  average: {
    fontSize: 50,
    color: 'white',
  },
  table: {
    flex: 1,
    marginVertical: 2
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginBottom: 2
  },
  tableHeaderParcial: {
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
    width: 40,
    alignItems: 'center',
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