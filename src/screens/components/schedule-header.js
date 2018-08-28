import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

const ScheduleHeader = ({ dia, onPressRight, onPressLeft }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.touch}
      onPress={onPressLeft}
    >
      <Icon name={'ios-arrow-back'} size={35} color={'#3ABEFF'} />
    </TouchableOpacity>
    <Text style={styles.text}>{dia}</Text>
    <TouchableOpacity
      style={styles.touch}
      onPress={onPressRight}
    >
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
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  touch: {
    width: 35,
    alignItems: 'center'

  }
})

export default ScheduleHeader