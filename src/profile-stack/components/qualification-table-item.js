import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const QualificationTableItem = ({materia, par1, par2, rec, final}) => (
  <View style={styles.dataContainer}>
    <View style={styles.materiaContainer}>
      <Text style={styles.score}>{materia}</Text>
    </View>
    <View style={styles.scoresContainer}>
      <Text style={styles.score}>{par1}</Text>
    </View>
    <View style={styles.scoresContainer}>
      <Text style={styles.score}>{par2}</Text>
    </View>
    <View style={styles.scoresContainer}>
      <Text style={styles.score}>{rec || '-'}</Text>
    </View>
    <View style={styles.scoresContainer}>
      <Text style={styles.score}>{final}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10

  },
  materiaContainer: {
    width: 140,
    justifyContent: 'center',
  },
  scoresContainer: {
    width: 45,
    alignItems: 'center',
    justifyContent: 'center'

  },
  score: {
    fontSize: 16
  }
})

export default QualificationTableItem