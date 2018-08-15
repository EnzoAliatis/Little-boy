import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const SubjectListLayout = ({children}) => (
  <View style={styles.container}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  }
})

export default SubjectListLayout