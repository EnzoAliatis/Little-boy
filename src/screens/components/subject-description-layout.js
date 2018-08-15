import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'


const SubjectDescriptionLayout = ({ classRoom, parallel, teacher, email, children, onEmailPress }) => (

  <View style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.text}>{`Aula: ${classRoom}`}</Text>
      <Text style={styles.text}>{`Paralelo: ${parallel}`}</Text>
      <Text style={styles.text}>{`Profesor: ${teacher}`}</Text>
      <TouchableWithoutFeedback
        onPress={onEmailPress}
      >
        <View>
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
    fontSize: 20
  },
  info: {
    backgroundColor: 'white',
    marginHorizontal: 7,
    marginVertical: 10,
    borderRadius: 20,
    height: 110,
    paddingLeft: 20,
    justifyContent: 'center'
  },
  options: {
    marginTop: 0
  },
  email: {
    color: 'rgb(36,158,243)',
    fontSize: 15,
    paddingTop: 0
  }
})
export default SubjectDescriptionLayout