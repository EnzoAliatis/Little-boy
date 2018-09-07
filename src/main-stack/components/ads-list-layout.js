import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const AdsListLayout = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
)


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default AdsListLayout