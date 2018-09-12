import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

const SubjectListLayout = ({children}) => (
  <View style={styles.container}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: 1,
  }
})

export default SubjectListLayout