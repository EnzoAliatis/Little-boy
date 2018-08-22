import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'

import EntypoIcon from 'react-native-vector-icons/Entypo'



const SubjectDescriptionLayout = ({ classRoom, parallel, teacher, email, children, onEmailPress, colorPanel }) => (

  <View style={styles.container}>
    <View style={[{ backgroundColor: colorPanel }, styles.info]}>
      <Text style={styles.text}>{`Aula: ${classRoom}`} </Text>
      <Text style={styles.text}>{`Paralelo: ${parallel}`}</Text>
      <Text style={styles.text}>{`Profesor: ${teacher}`} </Text>
      <TouchableWithoutFeedback
        onPress={onEmailPress}
      >
        <View style={styles.emailContainer}>
          <EntypoIcon name={'mail'} size={25} color={'white'} />
          <Text style={styles.email}>{email}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
    <View style={styles.options}>
      {children}
    </View>
  </View>

)


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  info: {
    height: 130,
    paddingLeft: 20,

    justifyContent: 'center'
  },
  options: {
    flex: 1
  },
  email: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 10
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default SubjectDescriptionLayout