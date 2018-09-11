import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const StudentDataHeader = ({ }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <View style={styles.imageFrame}>
        <Image
          source={require('../../../assets/images/fotoEnzo.jpeg')}
          style={styles.imagen}
        />
      </View>
      <TouchableOpacity
        style={styles.textChangeContainer}
        hitSlop={{top:120}}
      >
        <Text style={styles.textChange}>Cambiar Foto</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Cédula:</Text>
      <Text style={styles.infoText}>1310729510</Text>
      <Text style={styles.infoTitle}>Nombres y Apellidos:</Text>
      <Text style={styles.infoText}>Enzo Paolo Aliatis Ramírez</Text>
      <Text style={styles.infoTitle}>Facultad:</Text>
      <Text style={styles.infoText}>Ciencias Informáticas</Text>
      <Text style={styles.infoTitle}>Carrera:</Text>
      <Text style={styles.infoText}>Ingeniería en Sistemas</Text>
      <Text style={styles.infoTitle}>Itinerario:</Text>
      <Text style={styles.infoText}>Crédito</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginHorizontal: 25,
  },
  imageFrame: {
    width: 120,
    height: 120,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 60,
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  imagen: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',

  },
  infoContainer: {

  },
  infoTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  infoText: {
    fontSize: 16,
    color: 'white',
  },
  textChangeContainer: {
    alignItems: 'center',
    margin: 2
  },
  textChange: {
    color: 'white'
  }
})



export default StudentDataHeader