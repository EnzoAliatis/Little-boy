import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProfileSectionServiceHeader = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.texto}>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: 'center',
    backgroundColor: '#787878'
  },
  texto: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 5,
    color: 'white'
  }
})

export default ProfileSectionServiceHeader