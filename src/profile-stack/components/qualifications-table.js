import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const QualificationsTable = ({ children, level }) => (
  <View style={styles.table}>
    <View style={styles.legendContainer}>
      <Text style={styles.legendText}>Nivel:{level}</Text>
    </View>
    <View style={styles.tableHeaderContainer}>
      <View style={styles.tableHeaderMateriaContainer}>
        <Text style={styles.tableHeaderText}>Materia</Text>
      </View>
      <View style={styles.tableHeaderTextContainer}>
        <Text style={styles.tableHeaderText}>1Par</Text>
      </View>
      <View style={styles.tableHeaderTextContainer}>
        <Text style={styles.tableHeaderText}>2Par</Text>
      </View>
      <View style={styles.tableHeaderTextContainer}>
        <Text style={styles.tableHeaderText}>Rec</Text>
      </View>
      <View style={styles.tableHeaderTextContainer}>
        <Text style={styles.tableHeaderText}>Final</Text>
      </View>
    </View>
    <View style={styles.tableBoddyContainer}>
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
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
  legendContainer: {
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1'
  },
  legendText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#151515'
  },
  tableBoddyContainer: {
    backgroundColor: '#F9F9F9'
  },
  tableHeaderMateriaContainer: {
    width: 140
  },
  tableHeaderTextContainer: {
    width: 45,
    alignItems: 'center'
  },
  tableHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D1D1D'
  }
})

export default QualificationsTable
