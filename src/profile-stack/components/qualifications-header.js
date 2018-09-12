import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'



const QualificationsHeader = ({onPressLeft, onPressRight}) => (
  <SafeAreaView style={styles.header}>
    <TouchableOpacity
      style={styles.touch}
      onPress={onPressLeft}
    >
      <Icon name={'ios-arrow-back'} size={35} color={'#3ABEFF'} />
    </TouchableOpacity>
    <Text style={styles.headerText}>General</Text>
    <TouchableOpacity
      style={styles.touch}
      onPress={onPressRight}
    >
      <Icon name={'ios-arrow-forward'} size={35} color={'#3ABEFF'} />
    </TouchableOpacity>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F7F7F7',
    height: 65,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  touch: {
    width: 35,
    alignItems: 'center'

  }
})

export default QualificationsHeader


