import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

const SeparatorList = ({ color }) => (
  <View style={[
    styles.separator,
    {
      borderTopColor: color ? color : '#eaeaea'
    }
  ]}>
  </View>
)

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1
  }
})

export default SeparatorList