import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

const MaterialListLayout = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
)


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default MaterialListLayout