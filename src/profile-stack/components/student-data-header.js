import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const StudentDataHeader = ({ cedula, fullName, faculty, career }) => (
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
      <Text style={styles.infoText}>{cedula}</Text>
      <Text style={styles.infoTitle}>Nombres y Apellidos:</Text>
      <Text style={styles.infoText}>{fullName}</Text>
      <Text style={styles.infoTitle}>Facultad:</Text>
      <Text style={styles.infoText}>{faculty}</Text>
      <Text style={styles.infoTitle}>Carrera:</Text>
      <Text style={styles.infoText}>{career}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    margin: 3,
    borderRadius: 5,
    paddingVertical: 10
  },
  imageContainer: {
    marginHorizontal: 20,
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
  infoTitle: {
    fontSize: 20,
    color: '#151515',
    fontWeight: 'bold'
  },
  infoText: {
    fontSize: 16,
    color: '#1D1D1D',
    marginBottom: 2
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