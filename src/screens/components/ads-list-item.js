import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const AdsListItem = ({title, body, color, date}) => (
  <View style={[{borderLeftColor: color}, styles.container]}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text}>{body}</Text>
    <Text style={styles.right}>{date}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 2,
    padding: 5,
    borderWidth: 1,
    borderColor: '#3ABEFF',
    borderLeftWidth: 10,
    paddingRight: 10
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  right: {
    textAlign: 'right'
  },
  text: {
    textAlign: 'justify'
  }
})


export default AdsListItem