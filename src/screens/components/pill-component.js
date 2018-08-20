import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'



const PillComponent = ({ onPress, pillName, FontAwesomeIcon, FoundationIcon, colorIcon }) => (
  <TouchableOpacity
    style={styles.pill}
    onPress={onPress}
  >
    <View style={styles.container}>
      {FontAwesomeIcon && <FontAwesome name={`${FontAwesomeIcon}`} size={35} color={colorIcon || '#488A25'}/>}
      {FoundationIcon && <Foundation name={`${FoundationIcon}`} size={35} color={colorIcon || '#488A25'}/>}

      
      <View style={styles.left}>
        <Text style={styles.title}>{pillName}</Text>
      </View>
      <View style={styles.right}>
        <Ionicons name={'ios-arrow-forward'} size={55} color={'black'} />
      </View>
    </View>

  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    borderRadius: 10,

    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: "white",
    borderRadius: 20
  },
  title: {
    fontSize: 30
  },
  right: {
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    marginLeft: 15
  },
  pill: {
    marginVertical: 2.5
  }
})


export default PillComponent