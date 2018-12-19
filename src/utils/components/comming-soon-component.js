import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const CommingSoonComponent = () => (
  <View style={styles.container}>
    <Text style={styles.texto}>Proximamente...</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 40,
    fontWeight: 'bold'
  }
})

export default CommingSoonComponent
