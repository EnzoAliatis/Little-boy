import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

const HomeworkListLayout = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 70,
    fontWeight: 'bold'
  }
})

export default HomeworkListLayout