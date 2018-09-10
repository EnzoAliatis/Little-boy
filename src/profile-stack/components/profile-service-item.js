import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'



const ProfileServiceItem = ({name}) => (
  <TouchableOpacity
    style={styles.container}
  >
    <Text style={styles.texto}>{name}</Text>
    <Ionicons style={styles.icon} name={'ios-arrow-forward'} size={25} color={'darkslategray'} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  texto: {
    fontSize: 20,
    paddingLeft: 10
  },
  icon: {
    paddingRight: 10
  }
})



export default ProfileServiceItem