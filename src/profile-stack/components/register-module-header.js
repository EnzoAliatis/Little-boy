import React from 'react'

import { Text, View, StyleSheet } from 'react-native'


const RegisterModuleHeader = ({ subjectName, subjectLevel, avaliableParallel, subjectCredits }) => (
  <View>
    <View style={styles.infoContainer}>
      <Text style={styles.textTitle}>Materia: </Text>
      <Text style={styles.textInfo}>{subjectName}</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.textTitle}>Nivel: </Text>
      <Text style={styles.textInfo}>{subjectLevel}</Text>
    </View>
    <View style={[styles.infoContainer, { justifyContent: 'space-between' }]}>
      <View style={styles.infoContainer}>
        <Text style={styles.textTitle}>Paralelos: </Text>
        <Text style={styles.textInfo}>{avaliableParallel}</Text>
      </View>
      <View style={[styles.infoContainer, { paddingRight: 10 }]}>
        <Text style={styles.textTitle}>Créditos: </Text>
        <Text style={styles.textInfo}>{subjectCredits}</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  textInfo: {
    fontSize: 18,
    fontWeight: 'normal'
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default RegisterModuleHeader