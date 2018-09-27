import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'


const RegisterModuleItem = ({ parallel, schedule, teacher, selected, onPressItem, isStepEnd }) => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Text style={styles.textParallel}>{parallel}</Text>
      <Text style={styles.textTitle}>Horario:</Text>
      <Text style={styles.textInfo}>{ schedule ? schedule[0] : '-'}</Text>
      <Text style={styles.textInfo}>{schedule ? schedule[1] : '-'}</Text>
      <Text style={styles.textTitle}>Profesor:</Text>
      <Text style={styles.textInfo}>{teacher}</Text>
    </View>
    {
      !isStepEnd ? (
        <TouchableOpacity
          style={styles.bottonContainer}
          onPress={onPressItem}
        >
          <Icon name={selected ? 'check-circle-o' : 'circle-o'} size={35} color={'#3ABEFF'} />
        </TouchableOpacity>
      ) : (
        <View
          style={styles.bottonContainer}
          onPress={onPressItem}
        >
          <Icon name={'check-circle-o'} size={35} color={'#3ABEFF'} />
        </View>
      )
    }
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E1E1',
    borderRadius: 5,
    margin: 10
  },
  infoContainer: {
    backgroundColor: '#F7F7F7',
    margin: 5,
    padding: 2,
    borderRadius: 5

  },
  textParallel: {
    color: '#151515',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  },
  textTitle: {
    color: '#151515',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  textInfo: {
    color: '#1D1D1D',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5
  },
  bottonContainer: {
    backgroundColor: '#F7F7F7',
    padding: 2,
    alignItems: 'center',
    borderRadius: 5

  }

})



export default RegisterModuleItem