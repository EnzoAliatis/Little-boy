import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const EmptyList = ({text}) => (
  <View style={styles.container}>
  <Text style={styles.text}>{text}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    fontSize: 20
  }
})

export default EmptyList