import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const Subject = ({onPress, subjectName}) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <View style={styles.container}>
      <Text>{subjectName}</Text>
    </View>

  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


export default Subject