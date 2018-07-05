import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const SubjectDescriptionLayout = ({ classRoom, parallel, teacher }) => (

  <View style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.text}>{`Aula: ${classRoom}`}</Text>
      <Text style={styles.text}>{`Paralelo: ${parallel}`}</Text>
      <Text style={styles.text}>{`Profesor: ${teacher}`}</Text>
    </View>
    <View>

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
    marginVertical: 3,
    borderRadius: 20,
    height: 100,
    paddingLeft: 20,
    justifyContent: 'center'
  }
})
export default SubjectDescriptionLayout