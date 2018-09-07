import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

const MaterialListHeader = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(67,165,70)',
    padding: 8
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default MaterialListHeader