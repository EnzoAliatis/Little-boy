import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'


const HeaderOnlyTitle = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
)


const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderBottomWidth: 3,
    borderBottomColor: '#E1E1E1'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  },
})

export default HeaderOnlyTitle