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
        hitSlop={{ top: 120 }}
      >
        <Text style={styles.textChange}>Cambiar Foto</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.infoContainer}>
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoTitle}>Cédula:</Text>
        <Text style={styles.infoText}>{cedula}</Text>
      </View>
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoTitle}>Nombres y Apellidos:</Text>
        <Text style={styles.infoText}>{fullName}</Text>
      </View>
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoTitle}>Facultad:</Text>
        <Text style={styles.infoText}>{faculty}</Text>
      </View>
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoTitle}>Carrera:</Text>
        <Text style={styles.infoText}>{career}</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    marginHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 15

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
    backgroundColor: 'white',
  },
  imagen: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  infoTitle: {
    fontSize: 18,
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
    color: '#444444'
  },
  infoTextContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#E1E1E1',
    marginBottom: 8,
  }
})



export default StudentDataHeader