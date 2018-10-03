import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'



const ProfileServiceItem = ({ name, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.texto}>{name}</Text>
      <Ionicons style={styles.icon} name={'ios-arrow-forward'} size={25} color={'darkslategray'} />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CDCDCD',
    flex: 1
  },
  texto: {
    fontSize: 20,
    paddingLeft: 10
  },
  icon: {
    paddingRight: 10
  },
  button: {
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  }
})



export default ProfileServiceItem