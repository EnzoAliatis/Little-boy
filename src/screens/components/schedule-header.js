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
      onPress={onPressLeft}
    >
      <Icon name={'ios-arrow-back'} size={35} color={'#3ABEFF'} />
    </TouchableOpacity>
    <Text style={styles.text}>{dia}</Text>
    <TouchableOpacity
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
    paddingHorizontal: 15
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default ScheduleHeader