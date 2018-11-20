import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const EvaluationListItem = ({ componente, mecanismo, evaluacion }) => (
  <View style={styles.itemContainer}>
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
    marginVertical: 10,
    paddingRight: 2
  },
  itemText: {
    fontSize: 17
  },
  itemComponenteContainer: {
    width: '50%',
    alignItems: 'flex-start',
    justifyContent: 'center',

  },
  itemMecanismoContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center'

  },
  itemEvaluacionContainer: {
    minWidth: 45,
    alignItems: 'center',
    justifyContent: 'center'

  }
})

export default EvaluationListItem