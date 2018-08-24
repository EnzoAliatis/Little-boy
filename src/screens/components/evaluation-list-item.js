import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const EvaluationListItem = ({ parcial, componente, mecanismo, evaluacion }) => (
  <View style={styles.itemContainer}>
    <View style={styles.itemParcialContainer}>
      <Text style={styles.itemText}>{parcial}</Text>
    </View>
    <View style={styles.itemComponenteContainer}>
      <Text style={styles.itemText}>{componente}</Text>
    </View>
    <View style={styles.itemMecanismoContainer}>
      <Text style={styles.itemText}>{mecanismo}</Text>
    </View>
    <View style={styles.itemEvaluacionContainer}>
      <Text style={styles.itemText}>{evaluacion}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginVertical: 10
  },
  itemText: {
    fontSize: 17,
  },
  itemParcialContainer: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',

  },
  itemComponenteContainer:  {
    width: 200,
    alignItems: 'flex-start',
    justifyContent: 'center',

  },
  itemMecanismoContainer: {
    width: 100,
    alignItems: 'flex-start',
    justifyContent: 'center'

  },
  itemEvaluacionContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'

  }
})

export default EvaluationListItem