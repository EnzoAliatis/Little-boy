import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet

} from 'react-native'

const Homework = ({ title, onPress, initDate, endDate, state }) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.init}>Inicio: {initDate}</Text>
          <Text style={styles.end}>Fin: {endDate}</Text>
        </View>
        <Text>Estado: {state}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/download.png')}
          style={styles.image}
        />
      </View>

    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: 'white',
    margin: 5,
    padding: 6,
    flexDirection: 'row',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    width: 70,
    height: 30,
    resizeMode: 'contain'
  },
  imageContainer: {
    justifyContent: 'center',
    paddingLeft: 50
  },
  info: {
    flex: 1,
    justifyContent: 'space-between'
  },
  init: {
    color: 'green'
  },
  end: {
    color: 'red'
  },
  text: {
    fontSize: 23
  }
})

export default Homework