import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const HeaderSearch = ({ placeholder, textValue, onChangeText }) => (
  <View
    style={styles.container}
  >
    <Icon
      name={'search'}
      size={23}
      style={{marginLeft: 10}}
    />
    <TextInput
      style={styles.inputContainer}
      placeholder={placeholder}
      value={textValue}
      onChangeText={onChangeText}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    backgroundColor:'#F7F7F7',
    marginBottom: 1
  },
  inputContainer: {
    flex: 2,
    marginHorizontal: 10,
    paddingLeft: 10, 
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20
  }
})

export default HeaderSearch