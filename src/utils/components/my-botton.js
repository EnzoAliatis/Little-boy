import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

const MyBotton = ({title, onPress}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
  >
    <Text style={styles.texto}>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9644D',
    alignItems: 'center',
    paddingVertical: 15,
    borderWidth: 3,
    borderColor: '#9F4032',
    borderRadius: 5
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F7F7F7'
  }
})


export default MyBotton