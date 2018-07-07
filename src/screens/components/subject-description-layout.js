import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import PillComponent from './pill-component'

const SubjectDescriptionLayout = ({ classRoom, parallel, teacher, onPress, pillsName }) => (

  <View style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.text}>{`Aula: ${classRoom}`}</Text>
      <Text style={styles.text}>{`Paralelo: ${parallel}`}</Text>
      <Text style={styles.text}>{`Profesor: ${teacher}`}</Text>
    </View>
    <View style={styles.options}>
      {
        pillsName.map((name) => 
        <PillComponent
          key={name.toString()}
          pillName={name}
          onPress={onPress}
        />)
      }
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
    marginVertical: 15,
    borderRadius: 20,
    height: 100,
    paddingLeft: 20,
    justifyContent: 'center'
  },
  options: {
    marginTop: 10
  }
})
export default SubjectDescriptionLayout