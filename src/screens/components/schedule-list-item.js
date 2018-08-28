import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'


const ScheduleListItem = ({ hour, name, number, color}) => (
  <View style={[{ backgroundColor: color }, styles.itemContainer]}>
    <View style={styles.horaContainer}>
      <Text style={styles.horaText}>{hour[0]}</Text>
      <Text style={styles.horaText}>{hour[1]}</Text>
    </View>
    <View style={styles.materiaContainer}>
      <Text style={styles.materiaText}>{name}</Text>
    </View>
    <View style={styles.salonContainer}>
      <Text style={styles.salonText}>{number}</Text>
    </View>
  </View>
)


const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 50 
  },
  horaContainer: {
    alignItems: 'center',
    width: '20%',
  },
  horaText: {
    fontSize: 15,
    color: 'white'
  },
  materiaContainer: {
    width: '50%',


  },
  materiaText: {
    fontSize: 25,
    color: 'white'
  },
  salonContainer: {
    width: '20%',
    alignItems: 'center',
  },
  salonText: {
    fontSize: 20,
    color: 'white'
  },
})

export default ScheduleListItem