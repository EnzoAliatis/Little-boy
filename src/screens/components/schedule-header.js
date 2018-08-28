import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const ScheduleHeader = () => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Icon name={'ios-arrow-back'} size={35} color={'#3ABEFF'} />
    </TouchableOpacity>
    <Text style={styles.text}>Lunes</Text>
    <TouchableOpacity>
      <Icon name={'ios-arrow-forward'} size={35} color={'#3ABEFF'} />
    </TouchableOpacity>
  </View>
)


const styles = StyleSheet.create({
  container: {
    height: 50,

    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default ScheduleHeader