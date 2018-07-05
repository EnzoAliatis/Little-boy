import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import Icon from '../../utils/icon'

const PillComponent = ({ onPress, pillName }) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>{pillName}</Text>
      </View>
      <View style={styles.right}>
        <Icon icon={">"} />
      </View>
    </View>

  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 3,
  },
  title: {
    fontSize: 30
  },
  right: {
    paddingRight: 8
  }
})


export default PillComponent