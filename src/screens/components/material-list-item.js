import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native'

const MaterialListItem = ({ title, onPress, initDate }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={onPress}
  >
    <View style={styles.info}>
      <Text style={styles.itemText}>{title}</Text>
      <Text style={styles.date}>Fecha Inicio: {initDate}</Text>
    </View>
    <View style={styles.imageContainer}>
      <Image 
        source={require('../../../assets/images/download.png')}
        style={styles.image}
      />
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
  }

})

export default MaterialListItem