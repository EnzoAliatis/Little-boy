import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'


const MaterialListItem = ({ title, onPress, initDate, colorIcon }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={onPress}
  >
    <View style={styles.info}>
      <Text style={styles.itemText}>{title}</Text>
      {
        initDate && <Text style={styles.date}>Fecha Inicio: {initDate}</Text>
      }
    </View>
    <View style={styles.iconContainer}>
      <Icon name={'file-download'} size={35} color={colorIcon || '#212121'} />
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemText: {
    fontSize: 25,
    paddingLeft: 15
  },
  date: {
    color: 'rgb(67,105,70)',
    marginTop: 5,
    paddingLeft: 15
  },
  image: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  info: {
    width: 300
  }, 
  iconContainer: {
    paddingRight: 15
  }

})

export default MaterialListItem