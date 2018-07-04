import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

const SubjectListLayout = ({children}) => (
  <View>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default SubjectListLayout